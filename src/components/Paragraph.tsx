import type { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {
  className?: string;
}

export function Paragraph({
  className = "",
  children,
}: ParagraphProps) {
  return <p className={`opacity-60 ${className}`}>{children}</p>;
}
