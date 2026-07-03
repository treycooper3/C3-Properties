import { BUSINESS } from "../lib/site";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-shell/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Start maximizing your property
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-sm sm:p-10">
            <h3 className="mb-7 font-serif text-2xl font-semibold text-ink">
              Schedule a property assessment
            </h3>
            <ContactForm />
          </div>

          <div className="lg:pt-4">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              Let&apos;s talk property
            </h3>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="eyebrow text-xs">Location</dt>
                <dd className="mt-1 text-ink/85">
                  {BUSINESS.city}, {BUSINESS.state}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-xs">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${BUSINESS.phoneE164}`} className="text-ink/85 hover:text-teal">
                    {BUSINESS.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-xs">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${BUSINESS.email}`} className="text-ink/85 hover:text-teal">
                    {BUSINESS.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-xs">Hours</dt>
                <dd className="mt-1 text-ink/85">
                  Mon &ndash; Fri: 9AM &ndash; 6PM
                  <span className="mt-0.5 block text-sm text-stone-warm">
                    Guest support available 24/7
                  </span>
                </dd>
              </div>
              <div className="border-t border-ink/10 pt-6">
                <dt className="eyebrow text-xs">Markets We Serve</dt>
                <dd className="mt-1.5 leading-relaxed text-stone-warm">
                  Melbourne, FL &middot; Melbourne Beach &middot; Satellite Beach &middot;
                  Palm Bay &middot; Viera &middot; Brevard County &middot; Space Coast
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
