import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convit3 Digital",
  description: "Convit3 Digital - Plataforma de convites digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
