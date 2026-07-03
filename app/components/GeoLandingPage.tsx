import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { BUSINESS, SITE_URL, faqSchema, localBusinessSchema } from "../lib/site";

export interface GeoPageData {
  slug: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  serviceName: string;
  serviceDescription: string;
  sections: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
}

function serviceSchema(data: GeoPageData): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.serviceName,
    description: data.serviceDescription,
    serviceType: data.serviceName,
    url: `${SITE_URL}/${data.slug}`,
    provider: { "@type": "RealEstateAgent", name: BUSINESS.name, url: SITE_URL, telephone: BUSINESS.phoneE164 },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export default function GeoLandingPage({ data }: { data: GeoPageData }) {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={serviceSchema(data)} />
      <JsonLd data={faqSchema(data.faqs)} />
      <Nav />
      <main className="pt-[72px]">
        <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <p className="eyebrow mb-5">{data.eyebrow}</p>
          <h1 className="heading-display">{data.headline}</h1>
          <div className="hairline mt-7 w-16" aria-hidden="true" />
          {data.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-6 leading-relaxed text-stone-warm">
              {paragraph}
            </p>
          ))}
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="/#contact" className="btn-primary">
              Schedule an Assessment
            </a>
            <a href={`tel:${BUSINESS.phoneE164}`} className="btn-ghost">
              Call {BUSINESS.phone}
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-4xl grid-cols-3 gap-4 px-6">
          <Image src="/photos/hero-exterior.jpg" alt="Melbourne FL vacation rental exterior at sunset" width={1920} height={1434} sizes="33vw" className="aspect-[4/3] w-full object-cover" />
          <Image src="/photos/living-room.jpg" alt="Furnished living room in a managed Melbourne rental" width={1920} height={1072} sizes="33vw" className="aspect-[4/3] w-full object-cover" />
          <Image src="/photos/bedroom-1.jpg" alt="Staged bedroom in a Space Coast short-term rental" width={1920} height={1440} sizes="33vw" className="aspect-[4/3] w-full object-cover" />
        </section>

        <section className="mx-auto max-w-4xl px-6 py-14">
          <div className="space-y-10">
            {data.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-2xl font-normal text-ink">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-stone-warm">{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-shell/60 py-14">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-serif text-3xl font-normal text-ink">Frequently asked questions</h2>
            <div className="mt-8 space-y-7">
              {data.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 leading-relaxed text-stone-warm">{faq.answer}</p>
                </div>
              ))}
            </div>
            <a href="/#contact" className="btn-primary mt-10">
              Get Your Free Property Assessment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
