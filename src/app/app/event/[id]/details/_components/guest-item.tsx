import { Guest } from "@prisma/client";

export function GuestItem({ guests }: { guests: Guest }) {
  return (
    <li className="flex justify-between bg-black/40 rounded-s-md px-6 py-3 border border-zinc-800 ">
      <div className="flex flex-col">
        <span className="text-xl text-zinc-200 font-bold">{guests.name}</span>
        <span className="text-sm text-zinc-400">{guests.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl text-zinc-200 font-bold">
          {guests.qtdCompanion}
        </span>
      </div>
    </li>
  );
}
