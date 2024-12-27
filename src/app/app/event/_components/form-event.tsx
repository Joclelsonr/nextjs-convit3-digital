import { Event } from "@prisma/client";
import { Steps } from "./steps";
import { InputField } from "@/components/input-field";
import { saveEvent } from "../_actions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type FormEventProps = {
  event: Event;
  aliasValid: boolean;
  setAliasValid: (valid: boolean) => void;
  changeEvent: (event: Event) => void;
  checkAlias: () => void;
};

export function FormEvent({ event, aliasValid, changeEvent }: FormEventProps) {
  const router = useRouter();
  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];

  function formatAlias(value: string) {
    return value.replace(/ /g, "-").toLowerCase();
  }

  const allowNextStep: boolean[] = [
    !!event.alias && !!event.name && aliasValid,
    !!event.date && !!event.location,
    !!event.description &&
      (event.expectedGuests ?? 0) > 0 &&
      !!event.image &&
      !!event.imageBackground,
  ];

  async function handleSubmit() {
    const response = await saveEvent(event);
    if (response instanceof Error) {
      toast({
        title: "Erro ao criar evento",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    }

    toast({
      title: "Evento criado com sucesso!",
      description:
        "Você pode compartilhar o link do seu evento com seus amigos!",
    });
    router.push(`/app/event/${response?.id}/success`);
  }

  return (
    <div>
      <Steps
        labels={labels}
        labelAction="Cadastrar"
        action={() => handleSubmit()}
        isNextStep={allowNextStep}
      >
        <div className="flex flex-col gap-5">
          <InputField
            label="Identificador"
            description="Identificador único e exclusivo para o evento (usado na URL)"
            error={aliasValid ? "" : "Alias já foi utilizado e outro evento"}
            value={formatAlias(event.alias ?? "")}
            onChange={(e) =>
              changeEvent({ ...event, alias: formatAlias(e.target.value) })
            }
          />
          <InputField
            label="Nome"
            description='Nome do evento (ex: "Festa do João")'
            value={event.name ?? ""}
            onChange={(e) => changeEvent({ ...event, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Data"
            description="Data e hora do evento"
            value={
              event.date
                ? new Date(event.date).toISOString().slice(0, 16)
                : new Date().toISOString().slice(0, 16)
            }
            onChange={(e) =>
              changeEvent({ ...event, date: new Date(e.target.value) })
            }
            type="datetime-local"
          />
          <InputField
            label="Local"
            description="Local onde o evento será realizado"
            value={event.location ?? ""}
            onChange={(e) =>
              changeEvent({ ...event, location: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            label="Descrição"
            description='Descrição do evento (ex: "Só entra se trouxer presente!")'
            value={event.description ?? ""}
            onChange={(e) =>
              changeEvent({ ...event, description: e.target.value })
            }
          />
          <InputField
            label="Imagem"
            description='URL da imagem que será exibida no convite (ex: "https://i.imgur.com/123456.jpg")'
            value={event.image ?? ""}
            onChange={(e) => changeEvent({ ...event, image: e.target.value })}
          />
          <InputField
            label="Background"
            description='URL da imagem que será exibida no background (ex: "https://i.imgur.com/123456.jpg")'
            value={event.imageBackground ?? ""}
            onChange={(e) =>
              changeEvent({ ...event, imageBackground: e.target.value })
            }
          />
          <InputField
            label="Público Esperado"
            description='Total de convidados e acompanhantes esperados (ex: "100 pessoas")'
            value={event.expectedGuests ?? 1}
            onChange={(e) =>
              changeEvent({ ...event, expectedGuests: Number(e.target.value) })
            }
            type="number"
            min={1}
          />
        </div>
      </Steps>
    </div>
  );
}
