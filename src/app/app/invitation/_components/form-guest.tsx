import { Guest } from "@prisma/client";

import { InputField } from "@/components/input-field";
import { InputToggle } from "./input-toggle";

export interface FormGuestProps {
  guest: Guest;
  changeGuest: (guest: Guest) => void;
}

export function FormGuest({ guest, changeGuest }: FormGuestProps) {
  return (
    <div className="flex flex-col gap-2">
      <InputField
        label="Nome"
        value={guest.name ?? ""}
        onChange={(e) => changeGuest({ ...guest, name: e.target.value })}
      />
      <InputField
        label="E-mail"
        value={guest.email ?? ""}
        onChange={(e) => changeGuest({ ...guest, email: e.target.value })}
      />
      <div className="grid grid-cols-3 gap-4">
        <InputToggle
          label="Confirmar Presença?"
          value={guest.confirmed ?? true}
          onChange={(value) => {
            changeGuest({ ...guest, confirmed: value ?? true });
          }}
          className="flex-1"
        />
        {guest.confirmed && (
          <InputToggle
            label="Possui Acompanhantes?"
            value={guest.hasCompanion ?? false}
            onChange={(value) => {
              changeGuest({
                ...guest,
                hasCompanion: value,
                qtdCompanion: value ? 1 : 0,
              });
            }}
            className="flex-1"
          />
        )}

        {guest.hasCompanion && (
          <InputField
            label="Quantos Acompanhantes?"
            value={guest.qtdCompanion ?? 1}
            onChange={(e) =>
              changeGuest({
                ...guest,
                qtdCompanion: Number(e.target.value),
              })
            }
            min={1}
            type="number"
          />
        )}
      </div>
    </div>
  );
}
