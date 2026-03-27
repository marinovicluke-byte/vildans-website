import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type ServiceCardProps = {
  name: string;
  duration: string;
  price: number;
  description: string;
};

export function ServiceCard({ name, duration, price, description }: ServiceCardProps) {
  return (
    <div className="bg-bg-primary rounded-lg border border-border-subtle p-8 flex flex-col transition-all duration-base ease-smooth hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <h3 className="font-heading text-text-primary mb-2">{name}</h3>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary">
          {duration}
        </span>
        <span className="text-xs text-text-secondary">&middot;</span>
        <span className="text-xs uppercase tracking-[0.08em] font-medium text-accent">
          ${price}
        </span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">{description}</p>
      <Button href={siteConfig.bookingUrl} variant="ghost" className="self-start">
        Book This Session
      </Button>
    </div>
  );
}
