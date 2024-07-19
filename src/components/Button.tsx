"use client";

import type { PropsWithChildren } from "react";
import styles from "./Button.module.css";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  hasForwardIcon?: boolean;
  title: string;
  iconName?: string;
  active?: boolean;
  href: string;
}

export function Button({
  className = "",
  hasForwardIcon,
  title,
  children,
  iconName,
  active: isActive,
  href,
}: ButtonProps) {
  return (
    <a
      target="_blank"
      href={href}
      className={`leading-none ${styles.hover} ${styles.transition} bg-right-6 ${hasForwardIcon ? styles.forward : ""} relative btn border bg-[#1B1D20]/[.40] border-[#0F1113]/[.30] rounded-2xl p-4 pr-12 w-full flex flex-col justify-end backdrop-blur-3xl select-none cursor-pointer ${isActive ? styles.active : ""} ${className}`}
      rel="noreferrer"
    >
      <Heading className="text-xl">{title}</Heading>
      {children && (
        <Paragraph className="text-sm opacity-40">
          {children}
        </Paragraph>
      )}
      {iconName && (
        <img
          src={`/icons/${iconName}.svg`}
          alt={iconName}
          className="absolute top-4 right-4 w-8 h-8"
        />
      )}
    </a>
  );
}
