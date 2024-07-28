import { languages } from "@/app/i18n/settings";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: {
    lang: string;
  };
}>) {
  return (
    <>
      {children}
      <LanguageSwitch lang={params.lang} />
    </>
  );
}
