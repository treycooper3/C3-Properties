import { BUSINESS } from "../lib/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-ink/5 bg-shell/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-5">Get In Touch</p>
          <h2 className="heading-display">Start Maximizing Your Property</h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card-editorial bg-white p-9 sm:p-12">
              <h3 className="mb-9 font-serif text-2xl font-normal text-ink">
                Schedule a Property Assessment
              </h3>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:pt-6">
            <h3 className="font-serif text-3xl font-normal text-ink">
              Let&apos;s Talk Property
            </h3>
            <div className="hairline mt-6 w-16" aria-hidden="true" />

            <dl className="mt-9 space-y-7">
              <div>
                <dt className="eyebrow text-[0.62rem]">Location</dt>
                <dd className="mt-1.5 text-ink/85">
                  {BUSINESS.city}, {BUSINESS.state}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem]">Phone</dt>
                <dd className="mt-1.5">
                  <a href={`tel:${BUSINESS.phoneE164}`} className="text-ink/85 hover:text-teal">
                    {BUSINESS.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem]">Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${BUSINESS.email}`} className="text-ink/85 hover:text-teal">
                    {BUSINESS.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem]">Hours</dt>
                <dd className="mt-1.5 text-ink/85">
                  Mon &ndash; Fri: 9AM &ndash; 6PM
                  <span className="mt-0.5 block text-sm text-stone-warm">
                    Guest support available 24/7
                  </span>
                </dd>
              </div>
              <div className="border-t border-ink/10 pt-7">
                <dt className="eyebrow text-[0.62rem]">Markets We Serve</dt>
                <dd className="mt-2 leading-relaxed text-stone-warm">
                  Melbourne, FL &middot; Melbourne Beach &middot; Satellite Beach &middot;
                  Palm Bay &middot; Viera &middot; Brevard County &middot; Space Coast
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
