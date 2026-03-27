import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type BookingEmbedProps = { className?: string };

export function BookingEmbed({ className = "" }: BookingEmbedProps) {
  return (
    <Section id="booking" className={className}>
      <Container>
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="font-heading text-text-primary mb-4">Book a session</h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-8">
            Choose your session type and pick a time that works for you. Initial sessions are
            75 minutes. Follow-ups are 60 minutes.
          </p>
          <div className="bg-bg-secondary-light border-2 border-dashed border-border-strong rounded-lg p-12 text-center">
            <p className="text-text-secondary text-sm">Booking widget will be embedded here</p>
            <p className="text-text-secondary text-xs mt-2">
              Supports GoHighLevel, Calendly, Cal.com, or any iframe/JS embed
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
