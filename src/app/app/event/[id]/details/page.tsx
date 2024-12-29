"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Guest } from "@prisma/client";
import { getEvents } from "./_actions";

import { Loading } from "@/components/loading";
import { EventDetails } from "./_components/event-details";

export default function Page() {
  const params = useParams();
  const [event, setEvent] = useState<EventGuest | null>(null);
  const confirmed = event?.guests?.filter((c) => c.confirmed) ?? [];
  const absent = event?.guests?.filter((c) => !c.confirmed) ?? [];
  const total = confirmed?.reduce((total: number, guest: Guest) => {
    return total + guest.qtdCompanion + 1;
  }, 0);

  useEffect(() => {
    const fetchEvent = async () => {
      const eventResponse = await getEvents(params.id as string);
      if (eventResponse) {
        setEvent(eventResponse);
      }
    };
    fetchEvent();
  }, [params.id]);

  const handleLoadGuests = () => {
    console.log("Atualizar lista de convidados");
  };

  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center overflow-hidden bg-[url('/background-elements.svg')] bg-cover ">
      {event ? (
        <div className="w-full h-full max-w-4xl mt-20 overflow-auto">
          <EventDetails
            event={event}
            confirmed={confirmed}
            absent={absent}
            total={total}
            loadGuests={handleLoadGuests}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
