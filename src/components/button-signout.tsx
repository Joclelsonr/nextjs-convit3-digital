"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut, Loader } from "lucide-react";
import { useState } from "react";

export function ButtonSignOut() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSignOut() {
    setIsLoading(true);

    try {
      signOut();
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <Button
      variant="outline"
      className="text-zinc-200 bg-transparent"
      onClick={() => handleSignOut()}
    >
      {isLoading ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
      Sair
    </Button>
  );
}
