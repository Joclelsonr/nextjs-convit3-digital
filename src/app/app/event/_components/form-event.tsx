"use client";

import { useState } from "react";
import { Event } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { saveEvent } from "../_actions";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { EventFormSchema } from "../schema";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { labelsSteps } from "@/constants/labels-step-form";
import { TimePicker } from "./time-picker";

type FormEventProps = {
  form: UseFormReturn<EventFormSchema>;
  aliasValid: boolean;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setAliasValid: (valid: boolean) => void;
  checkAlias: () => void;
};

type FieldName = keyof EventFormSchema;

export function FormEvent({
  form,
  aliasValid,
  isLoading,
  setIsLoading,
}: FormEventProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  function formatAlias(value: string) {
    return value.replace(/ /g, "-").toLowerCase();
  }

  function noPrevStep() {
    return currentStep === 0;
  }

  function noNextStep() {
    return currentStep === labelsSteps.length - 1;
  }

  async function handleNextStep() {
    if (noNextStep()) return;
    const fields = labelsSteps[currentStep].fields;
    const valid = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    console.log({ alias: aliasValid, form: valid });
    if (aliasValid && valid) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handlePrevStep() {
    if (noPrevStep()) return;
    setCurrentStep(currentStep - 1);
  }

  async function onSubmit(values: EventFormSchema) {
    setIsLoading(true);
    const response = await saveEvent(values as Event);
    if (response) {
      toast({
        title: "Evento criado com sucesso!",
        description:
          "Você pode compartilhar o link do seu evento com seus amigos!",
      });
      setIsLoading(false);
      return router.push(`/app/event/${response?.id}/success`);
    }
    toast({
      title: "Erro ao criar evento",
      description: "Tente novamente mais tarde",
      variant: "destructive",
    });
  }

  function handleLabel() {
    return (
      <div className="grid grid-cols-3 gap-10 select-none">
        {labelsSteps.map((label, index) => {
          const select = currentStep === index;
          return (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-full ${
                  select
                    ? "bg-white text-black"
                    : "bg- bg-zinc-700 text-zinc-400"
                }`}
              >
                {index + 1}
              </span>
              <span className={`${select ? "text-white" : "text-zinc-600"}`}>
                {label.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex-1 flex flex-col gap-10 w-full">
          {/* LABELS */}
          <div className="self-center">{handleLabel()}</div>

          {/* STEPS */}
          {currentStep === 0 && (
            <section className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="alias"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Identificador</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-white"
                        onChange={(e) =>
                          field.onChange(formatAlias(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Identificador único e exclusivo para o evento (usado na
                      URL)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome</FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white" />
                    </FormControl>
                    <FormDescription>
                      {'Nome do evento (ex: "Festa do João")'}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          )}

          {currentStep === 1 && (
            <section className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white">Data</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal bg-transparent text-white",
                              !field.value && "text-white"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP HH:mm:ss", {
                                locale: ptBR,
                              })
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-1 bg-black "
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          locale={ptBR}
                          className="bg-black text-white"
                        />
                        <div className="p-2 border-t border-border">
                          <TimePicker
                            setDate={field.onChange}
                            date={field.value}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormDescription>Data e hora do evento.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Local</FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white" />
                    </FormControl>
                    <FormDescription>
                      Local onde o evento será realizado.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          )}

          {currentStep === 2 && (
            <section className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Descrição</FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white" />
                    </FormControl>
                    <FormDescription>
                      Descrição do evento (ex: Só entra se trouxer presente!)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Imagem</FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white" />
                    </FormControl>
                    <FormDescription>
                      {
                        'URL da imagem que será exibida no convite (ex: "https://i.imgur.com/123456.jpg")'
                      }
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageBackground"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Background</FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white" />
                    </FormControl>
                    <FormDescription>
                      {
                        'URL da imagem que será exibida no background (ex: "https://i.imgur.com/123456.jpg")'
                      }
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedGuests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Público Esperado
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="text-white"
                      />
                    </FormControl>
                    <FormDescription>
                      {
                        'Total de convidados e acompanhantes esperados (ex: "100 pessoas")'
                      }
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          )}

          {/* ACTIONS */}
          <div className="flex justify-between">
            {noPrevStep() ? (
              <Link
                href="/app"
                className="flex justify-center px-2 py-2 rounded-md bg-background hover:bg-accent"
              >
                Cancelar
              </Link>
            ) : (
              <Button
                onClick={handlePrevStep}
                disabled={noPrevStep()}
                className={`px-4 py-2 rounded-md ${
                  noPrevStep()
                    ? "bg-zinc-400 opacity-50 cursor-not-allowed"
                    : "bg-zinc-700 hover:bg-zinc-600 text-white"
                }`}
              >
                Anterior
              </Button>
            )}
            {noNextStep() ? (
              <Button onClick={form.handleSubmit(onSubmit)}>
                {isLoading ? "Criando evento..." : "Criar evento"}
              </Button>
            ) : (
              <Button onClick={handleNextStep} disabled={noNextStep()}>
                Próximo
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
