"use client";
import "@/app/globals.css";
import { Background } from "@/components/Background";
import { dir } from "i18next";
import { Golos_Text } from "next/font/google";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";

const golosText = Golos_Text({
  display: "auto",
  subsets: ["cyrillic", "latin"],
});

export function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const params = useParams<{ lang: string }>();
  const lang = params.lang ?? "en";

  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`text-foreground bg-background ${golosText.className}`}
      >
        <main className="flex min-h-[100svh] flex-col items-center justify-center p-[5%] short:justify-start">
          {children}
        </main>
        <Background />
      </body>
    </html>
  );
}
