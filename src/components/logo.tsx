import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fontRighteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

type LogoProps = {
  size?: "sm" | "lg";
};

export function Logo({ size = "sm" }: LogoProps) {
  return (
    <Link
      href="/app"
      className={`${fontRighteous.className} ${
        size === "lg" ? "flex-col" : ""
      } flex items-center gap-2`}
    >
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={size === "lg" ? 100 : 50}
        height={size === "lg" ? 100 : 50}
      />
      <div
        className={`${
          size === "lg"
            ? "text-5xl"
            : "flex flex-col items-center text-lg leading-5"
        }`}
      >
        {size === "lg" ? (
          <>
            <h1 className="text-white">
              CONVIT<span className="text-primary">3</span> DIGITAL
            </h1>
          </>
        ) : (
          <>
            <h1 className="text-white">
              CONVIT<span className="text-blue-500">3</span>{" "}
            </h1>
            <h1 className="text-white">DIGITAL</h1>
          </>
        )}
      </div>
    </Link>
  );
}
