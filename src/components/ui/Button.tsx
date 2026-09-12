import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-signal text-white hover:bg-signal/90"
      : "border border-line text-ink hover:border-ink/40";

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
