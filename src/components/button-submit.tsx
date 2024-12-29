import Image from "next/image";

import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

export function SubmitButton({ isLoading, className, children }: ButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/loader.svg"
            alt="loader"
            width={20}
            height={20}
            className="animate-spin"
          />
          Carregando...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
