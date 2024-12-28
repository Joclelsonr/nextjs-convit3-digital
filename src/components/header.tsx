import { Logo } from "./logo";
import { auth } from "@/lib/auth";
import { ButtonSignOut } from "./button-signout";

export async function Header() {
  const session = await auth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-zinc-200">{session?.user?.email}</p>
            <ButtonSignOut />
          </div>
        </div>
      </div>
    </header>
  );
}
