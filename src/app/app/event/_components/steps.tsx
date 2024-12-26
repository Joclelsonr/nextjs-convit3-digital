"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";

type StepsProps = {
  labels: string[];
  labelAction: string;
  isNextStep?: boolean[];
  action: () => void;
  children: ReactNode[];
};

export function Steps(props: StepsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  function noPrevStep() {
    return currentStep === 0;
  }

  function noNextStep() {
    return currentStep === props.labels.length - 1;
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
    props.action();
  }

  const isNextStep = props.isNextStep?.[currentStep] ?? true;

  function handleLabel() {
    return (
      <div className="flex gap-4 select-none">
        {props.labels.map((label, index) => {
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
      <div>{props.children[currentStep]}</div>
      <div className="flex justify-between">
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
        {noNextStep() ? (
          <Button
            onClick={handleAction}
            disabled={!isNextStep}
            className={`px-4 py-2 rounded-md ${
              !isNextStep
                ? "bg-zinc-400 opacity-50"
                : "bg-blue-700 hover:bg-blue-600 text-white"
            }`}
          >
            {props.labelAction}
          </Button>
        ) : (
          <Button
            onClick={handleNextStep}
            disabled={!isNextStep || noNextStep()}
            className={`px-4 py-2 rounded-md ${
              !isNextStep || noNextStep()
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
