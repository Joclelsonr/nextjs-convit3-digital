"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function ButtonSignOut() {
  return (
    <Button
      variant="outline"
      className="text-zinc-200 bg-transparent"
      onClick={() => signOut()}
    >
      Sair
    </Button>
  );
}
