import { useTranslation } from "@/app/i18n";
import Link from "next/link";

interface HeadingProps {
  className?: string;
  lang: string;
}

export async function LanguageSwitch({
  className = "",
  lang,
}: HeadingProps) {
  const { t } = await useTranslation(lang, "common");
  return (
    <Link
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60 rounded-lg select-none hover:bg-zinc-700/[15] w-8 h-8 flex items-center justify-center ${className} transition`}
      href={`/${lang === "en" ? "ru" : "en"}`}
    >
      {t("flag")}
    </Link>
  );
}
