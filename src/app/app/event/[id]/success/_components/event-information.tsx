import { Event } from "@prisma/client";
import { LabelInformation } from "./label-information";

export interface EventInformationProps {
  event: Event;
  className?: string;
  isHiddenName?: boolean;
}

export function EventInformation(props: EventInformationProps) {
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      {props.isHiddenName ? null : (
        <div className="flex-1 flex items-center gap-4 border border-zinc-800 py-3 px-6 rounded-lg">
          <span className="text-2xl text-zinc-400 font-black">
            {props.event.alias}:
          </span>
          <span className="text-xl text-zinc-300">{props.event.name}</span>
        </div>
      )}
      <div className="flex gap-2">
        <LabelInformation label="Data:">
          <span>
            {new Date(props.event.date).toLocaleDateString()}
            {" as "}
            {new Date(props.event.date).toLocaleTimeString()}
          </span>
        </LabelInformation>
        <LabelInformation label="Local:">
          {props.event.location}
        </LabelInformation>
      </div>
      <LabelInformation label="Descrição:">
        {props.event.description}
      </LabelInformation>
    </div>
  );
}
