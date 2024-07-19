import type { Metadata } from "next";
import "@/app/globals.css";
import { languages } from "@/app/i18n/settings";
import { Background } from "@/components/Background";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { dir } from "i18next";
import { Golos_Text } from "next/font/google";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

const golosText = Golos_Text({
  display: "auto",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Kamil Sakhabutdinov :)",
  description: "My small site to showcase my CV",
};

export default function Layout({
  children,
  params: { lang },
}: Readonly<{
  children: ReactNode;
  params: {
    lang: string;
  };
}>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`text-[#E9ECEF] bg-[#0F1113] ${golosText.className}`}
      >
        <main className="flex min-h-screen flex-col items-center justify-center p-[5%] short:justify-start">
          {children}
        </main>
        <Background />
        <LanguageSwitch lang={lang} />
      </body>
    </html>
  );
}
