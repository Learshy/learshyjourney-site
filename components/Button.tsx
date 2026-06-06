import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-black shadow-glow hover:bg-cyan hover:text-ink"
      : "border border-white/12 bg-white/[0.04] text-white hover:border-cyan/50 hover:bg-cyan/10";

  return (
    <a
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
