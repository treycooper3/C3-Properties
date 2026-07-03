import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Property Assessment",
    body: "We analyze your property's earning potential with market data and competitive analysis.",
  },
  {
    title: "Setup & Optimization",
    body: "Professional staging, smart home installation, listing creation, and photography.",
  },
  {
    title: "Launch & Manage",
    body: "Dynamic pricing activation, automated guest messaging, and 24/7 support coverage.",
  },
  {
    title: "Track & Grow",
    body: "Monthly performance reports, revenue optimization, and portfolio expansion strategy.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-teal-deep py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-5 !text-sand">How It Works</p>
          <h2 className="heading-display !text-cream">Our Process</h2>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 120}>
              <div className="border-t border-cream/20 pt-8">
                <div className="font-serif text-5xl leading-none font-normal text-sand/50">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-serif text-[1.35rem] font-normal text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-cream/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
