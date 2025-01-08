import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const inter = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thanoraj Muthulingam",
  description: "Portfolio of Thanoraj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistMono.variable} bg-gray-50 text-gray-950 antialiased`}>
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[68.75rem] rounded-full sm:w-[31.25rem] blur-[10rem]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-15rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] blur-[10rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
