import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body font-medium text-sm tracking-wide rounded transition-all";

  const variants = {
    primary: [
      "bg-accent text-white px-8 py-4",
      "hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
      "active:scale-[0.97] active:transition-[50ms]",
      "transition-[transform,background-color,box-shadow]",
      "duration-micro ease-spring",
    ].join(" "),
    ghost: [
      "border border-border-strong text-text-primary px-8 py-4",
      "hover:border-accent hover:text-accent",
      "transition-[border-color,color] duration-base ease-smooth",
    ].join(" "),
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
