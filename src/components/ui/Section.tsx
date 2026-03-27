type SectionProps = {
  children: React.ReactNode;
  bg?: "primary" | "secondary" | "secondary-light";
  className?: string;
  id?: string;
};

export function Section({
  children,
  bg = "primary",
  className = "",
  id,
}: SectionProps) {
  const bgClasses = {
    primary: "bg-bg-primary",
    secondary: "bg-bg-secondary",
    "secondary-light": "bg-bg-secondary-light",
  };

  return (
    <section
      id={id}
      className={`py-section ${bgClasses[bg]} ${className}`}
    >
      {children}
    </section>
  );
}
