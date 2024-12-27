import Image from "next/image";

export default function InvitationSuccessPage() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <Image src="/mascot.png" alt="Mascot" width={300} height={300} />
      <span className="text-3xl font-bold text-zinc-200">Muito Obrigado!</span>
      <span className="text-zinc-400">
        Sua confirmação é muito importante para nós!
      </span>
    </div>
  );
}
