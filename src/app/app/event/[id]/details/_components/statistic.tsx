import Image from "next/image";

export interface StatisticProps {
  text: string;
  value: number;
  image: string;
}

export default function Statistic({ text, value, image }: StatisticProps) {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg py-2.5 px-6 gap-5">
      <div className="flex flex-col flex-1 ">
        <span className="font-light text-zinc-400">{text}:</span>
        <span className="text-2xl text-zinc-200 font-black">{value}</span>
      </div>
      <Image src={image} width={80} height={80} alt="icon" />
    </div>
  );
}
