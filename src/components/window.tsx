import Image from "next/image";
import { ReactNode } from "react";

type WindowProps = {
  label: string;
  title: string;
  image: string;
  background: string;
  children: ReactNode;
};

export function Window(props: WindowProps) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        src={
          props.background
            ? props.background
            : "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1.jpg"
        }
        alt="Imagem de background"
        className="-z-10 object-cover"
        fill
      />
      <div className="bg-black/60">
        <div className="flex gap-7 items-center p-6">
          <div className="w-28 h-28 relative">
            <Image
              src={
                props.image
                  ? props.image
                  : "https://d3jdy5kagtp3z4.cloudfront.net/files/eventos/170/18bc34ea92e424db9fad19091dacfcae.png"
              }
              alt="Imagem do evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {props.label ?? "Detalhes do Evento:"}
            </span>
            <span className="text-4xl font-bold text-white">
              {props.title ?? "Título do Evento"}
            </span>
          </div>
          <div className="flex-1"></div>
          <Image src="/elements.png" alt="Elementos" width={140} height={140} />
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">
          {props.children}
        </div>
      </div>
    </div>
  );
}
