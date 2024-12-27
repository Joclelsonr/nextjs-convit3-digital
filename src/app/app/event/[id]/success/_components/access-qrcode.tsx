import { Event } from "@prisma/client";
import QRCode from "react-qr-code";

type AccessQRcodeProps = {
  event: Event;
};

export function AccessQRcode(props: AccessQRcodeProps) {
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg border-zinc-800 p-4">
      <span className="text-sm font-light text-zinc-400">
        Acesse via Mobile
      </span>
      <QRCode
        size={200}
        value={JSON.stringify({ id: props.event.id })}
        className="p-2"
      />
    </div>
  );
}
