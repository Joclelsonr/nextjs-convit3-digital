import { Logo } from "@/components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <div className="flex flex-col items-center gap-4">
        <Logo size="lg" />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicações
        </p>
      </div>
      <Link
        href="/app/event"
        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Crie seu Evento
      </Link>
    </div>
  );
}
