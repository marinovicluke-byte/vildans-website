import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type ServiceCardProps = {
  name: string;
  duration: string;
  price: number;
  description: string;
  formats: readonly string[];
};

export function ServiceCard({ name, duration, price, description, formats }: ServiceCardProps) {
  return (
    <div className="bg-bg-primary rounded-xl border border-border-subtle p-10 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      <h3 className="font-heading text-xl text-text-primary mb-3">{name}</h3>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary">
          {duration}
        </span>
        <span className="text-xs text-text-secondary">&middot;</span>
        <span className="text-xs uppercase tracking-[0.08em] font-medium text-accent">
          ${price}
        </span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">{description}</p>
      <div className="flex items-center gap-2 mb-8">
        {formats.map((format) => (
          <span
            key={format}
            className="inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide text-text-secondary bg-[#eef1ea]"
          >
            {format}
          </span>
        ))}
      </div>
      <Button href={siteConfig.bookingUrl} variant="ghost" className="self-start">
        Book
      </Button>
    </div>
  );
}
