import { BUSINESS } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-shell/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="/" className="flex items-baseline gap-1.5">
              <span className="font-serif text-3xl font-semibold text-teal">C3</span>
              <span className="text-sm tracking-[0.14em] text-ink/80 uppercase">Properties</span>
            </a>
            <p className="mt-2 text-sm text-stone-warm">A Stay Starving Holdings Company</p>
          </div>

          <div className="text-sm leading-7 text-stone-warm">
            <p>
              {BUSINESS.city}, {BUSINESS.state} &middot;{" "}
              <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-teal">
                {BUSINESS.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-teal">
                {BUSINESS.email}
              </a>
            </p>
          </div>

          <div className="flex gap-6 text-sm text-stone-warm">
            <a href="/privacy" className="hover:text-teal">Privacy Policy</a>
            <a href="/terms" className="hover:text-teal">Terms of Service</a>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/5 pt-6 text-center text-xs text-stone-warm">
          &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved. &middot; Melbourne, Florida
        </div>
      </div>
    </footer>
  );
}
