"use client";

import { useCallback, useEffect, useState } from "react";
import { Event } from "@prisma/client";
import { Window } from "@/components/window";
import { FormEvent } from "./_components/form-event";
import { validateAlias } from "./_actions";

export default function Page() {
  const [event, changeEvent] = useState<Event>({} as Event);
  const [aliasValid, setAliasValid] = useState(true);

  const checkAlias = useCallback(async () => {
    if (!event.alias) return;
    const valid = await validateAlias(event.alias);
    setAliasValid(valid);
  }, [event.alias, setAliasValid]);

  useEffect(() => {
    checkAlias();
  }, [event, checkAlias]);

  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <Window
        label="Qual evento vamos criar?"
        title={event.name ?? "Novo Evento"}
        image={event.image}
        background={event.imageBackground}
      >
        <FormEvent
          event={event}
          aliasValid={aliasValid}
          setAliasValid={setAliasValid}
          checkAlias={checkAlias}
          changeEvent={changeEvent}
        />
      </Window>
    </div>
  );
}
