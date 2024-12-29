"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "../form-schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/button-submit";

export function FormAuth() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    setIsLoading(true);

    try {
      const response = await signIn("nodemailer", {
        email: values.email,
        redirect: false,
      });
      if (response?.ok) {
        toast({
          title: "Email enviado",
          description: "Verifique sua caixa de entrada",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Erro ao enviar email",
        description: "Tente novamente mais tarde",
      });
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-96"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-200">E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@email.com"
                  {...field}
                  className="text-zinc-400"
                />
              </FormControl>
              <FormDescription>
                Digite seu email para receber um link mágico de acesso.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4">
          <SubmitButton isLoading={isLoading}>Enviar link</SubmitButton>
        </div>
      </form>
    </Form>
  );
}
