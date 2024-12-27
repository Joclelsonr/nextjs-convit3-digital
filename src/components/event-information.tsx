import { Event } from "@prisma/client";
import { LabelInformation } from "./label-information";

export interface EventInformationProps {
  event: Event;
  className?: string;
  isHiddenName?: boolean;
}

export function EventInformation({
  event,
  className,
  isHiddenName,
}: EventInformationProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      {isHiddenName ? null : (
        <div className="flex-1 flex items-center gap-4 border border-zinc-800 py-3 px-6 rounded-lg">
          <span className="text-2xl text-zinc-400 font-black">
            {event.alias}:
          </span>
          <span className="text-xl text-zinc-300">
            {event.name ?? "Aguardando..."}
          </span>
        </div>
      )}
      <div className="flex gap-2">
        <LabelInformation label="Data:">
          <span>
            {event.date &&
              `${new Date(event.date).toLocaleDateString()} as ${new Date(
                event.date
              ).toLocaleTimeString()}`}
          </span>
        </LabelInformation>
        <LabelInformation label="Local:">
          {event.location ?? "Aguardando..."}
        </LabelInformation>
      </div>
      <LabelInformation label="Descrição:">
        {event.description ?? "Aguardando..."}
      </LabelInformation>
    </div>
  );
}
