import { languages } from "@/app/i18n/settings";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>) {
  const { lang } = await params;
  return (
    <>
      {children}
      <LanguageSwitch lang={lang} />
    </>
  );
}
