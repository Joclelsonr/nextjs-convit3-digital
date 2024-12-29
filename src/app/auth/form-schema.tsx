"use client";

import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({
      message: "Email inválido",
    })
    .email({
      message: "Digite um email",
    })
    .min(5, { message: "Email inválido" }),
});

export type FormSchema = z.infer<typeof formSchema>;
