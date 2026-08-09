import Image from "next/image";
import Reveal from "./Reveal";

export default function Sell() {
  return (
    <section id="sell" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 bg-[#0c0c12] py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
              <div className="animate-float relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/cars/sell.png"
                    alt="Black BMW ready for a same-day trade-in offer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute -bottom-5 right-2 rounded-2xl border border-white/10 bg-[#101016]/95 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-xs text-zinc-400">Instant offer</p>
                <p className="text-2xl font-bold text-amber-400">$52,400</p>
                <p className="text-xs text-zinc-500">paid same-day</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100} className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Sell Your Car</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Trade In Your Ride,
              <br />
              <span className="text-gradient-gold">Get Paid Today</span>
            </h2>
            <p className="mt-5 max-w-md text-zinc-400">
              Skip the haggle. Answer a few questions, receive a guaranteed offer in 60 seconds,
              and hand over the keys with zero paperwork stress.
            </p>

            <ol className="mt-9 flex flex-col gap-5">
              {[
                ["Describe your car", "Year, model, mileage — takes under a minute."],
                ["Get an instant offer", "AI-driven market pricing you can trust."],
                ["Hand over the keys", "We inspect, verify and pay the same day."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-sm font-bold text-black">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-0.5 text-sm text-zinc-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 text-base font-semibold text-black shadow-xl shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:brightness-110"
            >
              Get My Offer
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
