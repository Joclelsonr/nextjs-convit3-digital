"use client";

import { useEffect, useState } from "react";
import { Event, Guest } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

import { Window } from "@/components/window";
import { EventInformation } from "@/components/event-information";
import { Button } from "@/components/ui/button";
import { FormGuest } from "../_components/form-guest";

import { addGuest, getEvent } from "../_actions";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const [guest, changeGuest] = useState<Guest>({
    confirmed: true,
    hasCompanion: false,
    qtdCompanion: 0,
  } as Guest);
  const [event, setEvent] = useState<Event>({} as Event);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const eventResponse = await getEvent(params.alias as string);
      if (eventResponse) {
        setEvent(eventResponse);
      }
    };
    fetchEvent();
  }, [params.alias]);

  async function handleGuest() {
    setIsLoading(true);
    const response = await addGuest({ ...guest, eventId: event.id });
    if (response) {
      toast({
        title: "Confirmado!",
        description: `Você confirmou ${
          guest.confirmed ? "presença" : "ausência"
        } no evento`,
      });
      setIsLoading(false);
      return router.push(`/app/invitation/success`);
    }
    toast({
      title: "Ops, algo deu errado!",
      description: "Tente novamente em alguns minutos!",
      variant: "destructive",
    });
  }

  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <Window
        label="Você foi convidado para participar do evento"
        title={event.name ?? "Carregando..."}
        image={event.image}
        background={event.imageBackground}
      >
        <EventInformation isHiddenName={true} event={event} />
        <div className=" flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold text-zinc-200">
            Insira seus dados
          </span>
          <div className="border-t border-zinc-800"></div>
          <FormGuest guest={guest} changeGuest={changeGuest} />
          <Button
            className={`self-center ${
              guest.confirmed
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={handleGuest}
            disabled={isLoading}
          >
            {isLoading
              ? "Enviando..."
              : `Confirmar ${guest.confirmed ? "Presença" : "Ausência"}`}
          </Button>
        </div>
      </Window>
    </div>
  );
}
