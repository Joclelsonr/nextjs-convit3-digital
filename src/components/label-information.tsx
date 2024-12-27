import { ReactNode } from "react";

export interface InformationProps {
  label: string;
  children: ReactNode;
}

export function LabelInformation(props: InformationProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-200 font-bold ">{props.label}</span>
      <div className="text-xl text-zinc-400">{props.children}</div>
    </div>
  );
}
