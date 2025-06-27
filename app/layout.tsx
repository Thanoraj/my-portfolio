import type { Metadata } from "next";
import { Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

import { initDB } from "./lib/configs/init-db";
import ActiveSectionContextProvider from "./context/active-section";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme";

const lato = Lato({
  subsets: ["latin"],

  weight: ["400", "700", "900"],
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
  initDB();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="wh27ZUsn1uIf_GnrLVDe1F_WK31v6hpO7MtdV9SZEow"
        />
      </head>
      <body
        className={`${lato.className} ${geistMono.variable} bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-200 antialiased`}>
        <div className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[68.75rem] rounded-full sm:w-[31.25rem] blur-[10rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#676394] -z-10 absolute top-[-1rem] left-[-15rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] blur-[10rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
