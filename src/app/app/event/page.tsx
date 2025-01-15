"use client";

import { useCallback, useEffect, useState } from "react";
import { Window } from "@/components/window";
import { FormEvent } from "./_components/form-event";
import { validateAlias } from "./_actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventFormSchema, eventFormSchema } from "./schema";
import debounce from "lodash.debounce";

export default function Page() {
  const [aliasValid, setAliasValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EventFormSchema>({
    resolver: zodResolver(eventFormSchema),
    shouldUnregister: false,
    mode: "all",
    defaultValues: {
      alias: "",
      name: "",
      date: undefined,
      location: "",
      description: "",
      image: "",
      imageBackground: "",
      expectedGuests: 0,
    },
  });
  const alias = form.watch("alias");

  const checkAlias = useCallback(() => {
    const debouncedCheck = debounce(async (alias: string) => {
      if (!alias) return;
      const isValid = await validateAlias(alias);
      if (!isValid) {
        form.setError("alias", {
          type: "manual",
          message: "Alias já está em uso",
        });
      }
      setAliasValid(isValid);
    }, 1000);

    debouncedCheck(alias);
    return () => {
      debouncedCheck.cancel();
    };
  }, [alias, form]);

  useEffect(() => {
    checkAlias();
  }, [checkAlias]);

  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <Window
        label="Qual evento vamos criar?"
        title={form.watch("name") ?? "Novo Evento"}
        image={form.watch("image") ?? ""}
        background={form.watch("imageBackground") ?? ""}
      >
        <FormEvent
          form={form}
          aliasValid={aliasValid}
          isLoading={isLoading}
          setAliasValid={setAliasValid}
          checkAlias={() => {}}
          setIsLoading={setIsLoading}
        />
      </Window>
    </div>
  );
}
