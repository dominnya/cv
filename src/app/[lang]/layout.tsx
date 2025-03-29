import { languages } from "@/app/i18n/settings";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default async function Layout(
  props: Readonly<{
    children: ReactNode;
    params: {
      lang: string;
    };
  }>,
) {
  const params = await props.params;

  const { children } = props;

  return (
    <>
      {children}
      <LanguageSwitch lang={params.lang} />
    </>
  );
}
