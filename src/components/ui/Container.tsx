type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 md:px-[60px] ${
        narrow ? "max-w-body" : "max-w-content"
      } ${className}`}
    >
      {children}
    </div>
  );
}
