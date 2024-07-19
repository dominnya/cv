import type { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

export function Heading({ className = "", children }: HeadingProps) {
  return (
    <h2 className={`opacity-80 font-semibold text-3xl ${className}`}>
      {children}
    </h2>
  );
}
