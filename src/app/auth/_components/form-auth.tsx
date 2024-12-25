"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import { signIn } from "next-auth/react";

export default function FormAuth() {
  const { toast } = useToast();
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const response = await signIn("nodemailer", {
      email: email,
      redirect: false,
    });
    if (response?.ok) {
      toast({
        title: "Email enviado",
        description: "Verifique sua caixa de entrada",
      });
    }
    toast({
      title: "Erro ao enviar email",
      description: "Tente novamente mais tarde",
    });
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-zinc-500">
          Digite seu melhor email
        </Label>
        <Input type="email" id="email" name="email" className="text-zinc-500" />
      </div>
      <div>
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </div>
    </form>
  );
}
