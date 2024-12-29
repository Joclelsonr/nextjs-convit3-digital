import { Logo } from "@/components/logo";
import { FormAuth } from "./_components/form-auth";

export default function Page() {
  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <div className="flex flex-col items-center gap-2">
        <Logo size="lg" />
        <p className="text-zinc-500 font-light w-96 leading-6 select-none text-center">
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicações.
        </p>
      </div>
      <FormAuth />
    </div>
  );
}
