import { languages } from "@/app/i18n/settings";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
