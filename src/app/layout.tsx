import { Layout as GlobalLayout } from "@/components/Layout";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kamil Sakhabutdinov :)",
  description: "My small site to showcase my CV",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
