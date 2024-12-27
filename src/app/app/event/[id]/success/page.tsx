"use client";

import { Window } from "../../../../../components/window";
import { AccessQRcode } from "./_components/access-qrcode";
import { CopyClipboard } from "./_components/copy-clipboard";
import { EventInformation } from "../../../../../components/event-information";
import { Link1Icon } from "@radix-ui/react-icons";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getEvent } from "./_actions";
import { Event } from "@prisma/client";
import Link from "next/link";

export default function Page() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  useEffect(() => {
    const fetchEvent = async (): Promise<void> => {
      const eventResponse = await getEvent(params.id as string);
      if (eventResponse) {
        setEvent(eventResponse);
      }
    };
    fetchEvent();
  }, [params.id]);

  return (
    event && (
      <div className="h-screen flex flex-col gap-10 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
        <Window
          label="Seu evento foi criado com sucesso!"
          title={event.name}
          image={event.image}
          background={event.imageBackground}
        >
          <EventInformation event={event} isHiddenName={true} />
          <div className="flex gap-5 items-center py-4">
            <div className="flex-1 flex flex-col gap-5">
              <CopyClipboard
                icon={Link1Icon}
                label="Link para convidar"
                text={`${currentUrl}/app/invitation/${event.alias}`}
              />
              <CopyClipboard
                icon={Link1Icon}
                label="Link Administrador"
                text={`${currentUrl}/app/event/admin/${event.id}`}
              />
              <Link
                href="/app"
                className="flex justify-center px-4 py-2 rounded-md bg-background hover:bg-accent hover:text-accent-foreground"
              >
                Voltar
              </Link>
            </div>
            <AccessQRcode event={event} />
          </div>
        </Window>
      </div>
    )
  );
}
