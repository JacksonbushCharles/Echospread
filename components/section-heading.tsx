type SectionHeadingProps = {
  label: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl text-left" + ` ${className}`}>
      {label ? (
        <div className="mb-4 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-foreground/60">
          {label}
        </div>
      ) : null}
      {eyebrow ? (
        <div className="mb-3 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-foreground/60">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-sans text-xl leading-[0.99] tracking-[-0.04em] font-bold text-foreground sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-7 text-foreground/70 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
