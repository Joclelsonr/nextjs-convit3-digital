import Image from "next/image";

type LoadingProps = {
  width?: number;
  height?: number;
};

export function Loading({ width, height }: LoadingProps) {
  return (
    <div className="flex-1 flex justify-center items-center w-32 h-32">
      <Image
        src="/loading.gif"
        alt="loading"
        width={width ? width : 60}
        height={height ? height : 60}
      />
    </div>
  );
}
