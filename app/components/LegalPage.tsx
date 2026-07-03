import Nav from "./Nav";
import Footer from "./Footer";

export type LegalBlock =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { list: string[] }
  | { note: string };

export default function LegalPage({
  title,
  effectiveDate,
  blocks,
}: {
  title: string;
  effectiveDate: string;
  blocks: LegalBlock[];
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-[72px] pb-24">
        <div className="py-14">
          <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-stone-warm">
            Effective Date: {effectiveDate} | Last Updated: {effectiveDate}
          </p>
        </div>

        <div className="space-y-5 leading-relaxed text-ink/80">
          {blocks.map((block, index) => {
            if ("h2" in block) {
              return (
                <h2 key={index} className="pt-6 font-serif text-2xl font-semibold text-ink">
                  {block.h2}
                </h2>
              );
            }
            if ("h3" in block) {
              return (
                <h3 key={index} className="pt-2 font-serif text-lg font-semibold text-ink">
                  {block.h3}
                </h3>
              );
            }
            if ("list" in block) {
              return (
                <ul key={index} className="list-disc space-y-1.5 pl-6">
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if ("note" in block) {
              return (
                <p key={index} className="rounded-2xl bg-sand-soft/70 p-5 text-sm text-ink/80">
                  {block.note}
                </p>
              );
            }
            return <p key={index}>{block.p}</p>;
          })}
        </div>

        <a href="/" className="mt-12 inline-block text-sm font-semibold text-teal hover:text-teal-deep">
          ← Back to Home
        </a>
      </main>
      <Footer />
    </>
  );
}
