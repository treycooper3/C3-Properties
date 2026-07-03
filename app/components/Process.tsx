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
    <section id="process" className="bg-teal-deep py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 !text-sand">How It Works</p>
          <h2 className="font-serif text-4xl leading-tight font-semibold text-cream sm:text-5xl">
            Our process
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title}>
              <div className="font-serif text-5xl font-semibold text-sand/70">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-cream">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-cream/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
