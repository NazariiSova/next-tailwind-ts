
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full relative">
      <Header />
      <main>{children}</main>
    </div>
  );
}
