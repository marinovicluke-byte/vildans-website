import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const expectations = [
  { title: "What to wear", detail: "Comfortable clothes you can move your arm freely in. You stay fully clothed throughout." },
  { title: "Eating & drinking", detail: "Eat something light beforehand, not a full meal but don't come on an empty stomach. Drink water before and after." },
  { title: "When you arrive", detail: "The treatment room is at 229 Chesterville Road, Moorabbin. You'll lie on a treatment table in a calm, private room." },
  { title: "During the session", detail: "I apply gentle pressure to your arm while we work through what your body presents. It's not painful. Most people find it calming. Some sessions bring up emotion, that's normal." },
  { title: "After the session", detail: "Most people feel lighter, calmer, sometimes tired. Drink water. Avoid intense exercise for the rest of the day. Changes often continue integrating over the following 2-3 days." },
];

export function WhatToExpect() {
  return (
    <Section bg="secondary-light">
      <Container>
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-heading text-text-primary mb-8">What to expect</h2>
          <div className="space-y-6">
            {expectations.map((item, i) => (
              <div key={i}>
                <h3 className="font-heading text-text-primary text-base mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
