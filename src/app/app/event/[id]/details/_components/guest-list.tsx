import { Guest } from "@prisma/client";
import { GuestItem } from "./guest-item";

export function GuestList({ guests }: { guests: Guest[] }) {
  return (
    <div className="">
      <ul className="flex flex-col gap-2">
        {guests.map((guest) => (
          <GuestItem key={guest.id} guests={guest} />
        ))}
      </ul>
    </div>
  );
}
