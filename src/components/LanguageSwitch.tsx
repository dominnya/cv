import Link from "next/link";
import styles from "./LanguageSwitch.module.css";

interface HeadingProps {
  className?: string;
  lang: string;
}

export function LanguageSwitch({
  className = "",
  lang,
}: HeadingProps) {
  return (
    <Link
      className={`${styles.hover} absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 rounded-lg select-none h-8 p-2 flex items-center justify-center ${className} transition`}
      href={`/${lang === "en" ? "ru" : "en"}`}
    >
      {lang === "en" ? "English" : "Русский"}
    </Link>
  );
}
