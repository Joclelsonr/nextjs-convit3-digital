"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type StepsProps = {
  labels: string[];
  labelAction: string;
  isLoading?: boolean;
  isNextStep?: boolean[];
  children: ReactNode[];
  action: () => void;
};

export function Steps({
  labels,
  labelAction,
  isLoading,
  isNextStep,
  children,
  action,
}: StepsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  function noPrevStep() {
    return currentStep === 0;
  }

  function noNextStep() {
    return currentStep === labels.length - 1;
  }

  function handleNextStep() {
    if (noNextStep()) return;
    setCurrentStep(currentStep + 1);
  }
  function handlePrevStep() {
    if (noPrevStep()) return;
    setCurrentStep(currentStep - 1);
  }

  function handleAction() {
    action();
  }

  const isNextStepValue = isNextStep?.[currentStep] ?? true;

  function handleLabel() {
    return (
      <div className="grid grid-cols-3 gap-10 select-none">
        {labels.map((label, index) => {
          const select = currentStep === index;
          return (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-full ${
                  select
                    ? "bg-white text-black"
                    : "bg- bg-zinc-700 text-zinc-400"
                }`}
              >
                {index + 1}
              </span>
              <span className={`${select ? "text-white" : "text-zinc-600"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-10 w-full">
      <div className="self-center">{handleLabel()}</div>
      <div>{children[currentStep]}</div>
      <div className="flex justify-between">
        {noPrevStep() ? (
          <Link
            href="/app"
            className="flex justify-center px-2 py-2 rounded-md bg-background hover:bg-accent"
          >
            Cancelar
          </Link>
        ) : (
          <Button
            onClick={handlePrevStep}
            disabled={noPrevStep()}
            className={`px-4 py-2 rounded-md ${
              noPrevStep()
                ? "bg-zinc-400 opacity-50 cursor-not-allowed"
                : "bg-zinc-700 hover:bg-zinc-600 text-white"
            }`}
          >
            Anterior
          </Button>
        )}
        {noNextStep() ? (
          <Button
            onClick={handleAction}
            disabled={!isNextStepValue}
            className={`px-4 py-2 rounded-md ${
              !isNextStepValue
                ? "bg-zinc-400 opacity-50"
                : "bg-blue-700 hover:bg-blue-600 text-white"
            }`}
          >
            {isLoading ? "Criando evento..." : labelAction}
          </Button>
        ) : (
          <Button
            onClick={handleNextStep}
            disabled={!isNextStepValue || noNextStep()}
            className={`px-4 py-2 rounded-md ${
              !isNextStepValue || noNextStep()
                ? "bg-zinc-400 opacity-50"
                : "bg-green-700 hover:bg-green-600 text-white"
            }`}
          >
            Próximo
          </Button>
        )}
      </div>
    </div>
  );
}
