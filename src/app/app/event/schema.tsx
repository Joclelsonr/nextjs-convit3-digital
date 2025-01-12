import { z } from "zod";

export const eventFormSchema = z.object({
  alias: z
    .string({
      required_error: "Alias é obrigatório",
    })
    .min(3, {
      message: "Alias deve ter pelo menos 2 caracteres",
    }),
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(3, {
      message: "Nome deve ter pelo menos 3 caracteres",
    }),
  date: z.date({
    required_error: "Data é obrigatória",
  }),
  location: z
    .string({
      required_error: "Local é obrigatório",
    })
    .min(2, {
      message: "Local deve ter pelo menos 2 caracteres",
    }),
  description: z.string({
    required_error: "Descrição é obrigatória",
  }),
  image: z
    .string()
    .url({
      message: "URL deve ser válida",
    })
    .optional(),
  imageBackground: z
    .string()
    .url({
      message: "URL deve ser válida",
    })
    .optional(),
  expectedGuests: z
    .number({
      required_error: "Número de convidados é obrigatório",
    })
    .min(1, {
      message: "Número de convidados deve ser maior que 0",
    })
    .optional(),
});

export type EventFormSchema = z.infer<typeof eventFormSchema>;
