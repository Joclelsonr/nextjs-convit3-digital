import { toast } from "@/hooks/use-toast";
import { CopyIcon } from "@radix-ui/react-icons";

type CopyClipboardProps = {
  icon?: React.ElementType;
  label: string;
  text: string;
  observation?: string;
};

export function CopyClipboard(props: CopyClipboardProps) {
  function copyToClipboard() {
    navigator.clipboard.writeText(props.text);
    toast({
      description: "Texto copiado com sucesso!",
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-zinc-200">{props.label}</span>
      <div className="flex items-center gap-3 bg-black border border-zinc-800 text-zinc-400 px-2 py-2 rounded-md">
        {props.icon && <props.icon stroke={1.3} />}
        <span className="flex-1">{props.text}</span>
        <CopyIcon className="cursor-pointer" onClick={copyToClipboard} />
      </div>
      {props.observation && (
        <span className="text-xs text-yellow-300/80">{props.observation}</span>
      )}
    </div>
  );
}
