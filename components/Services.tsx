import Reveal from "./Reveal";

type Service = {
  icon: "rent" | "sell" | "buy";
  title: string;
  desc: string;
  points: string[];
  cta: string;
  href: string;
};

const services: Service[] = [
  {
    icon: "rent",
    title: "Rent by the Day",
    desc: "Hourly, daily or monthly. Unlock a car from your phone and drive away in minutes.",
    points: ["No deposit for verified members", "Insurance included", "Free cancellation up to 24h"],
    cta: "Start Renting",
    href: "#rentals",
  },
  {
    icon: "sell",
    title: "Sell Your Car",
    desc: "Get a fair, instant offer in 60 seconds. We handle the paperwork and transfer.",
    points: ["Instant online valuation", "Free home inspection", "Same-day payment"],
    cta: "Get an Offer",
    href: "#sell",
  },
  {
    icon: "buy",
    title: "Buy in Full",
    desc: "Certified pre-owned cars with full history. Finance it, pay cash, or trade in.",
    points: ["200-point inspection", "2-year warranty", "Financing from 4.9% APR"],
    cta: "Browse to Buy",
    href: "#fleet",
  },
];

const icons = {
  rent: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17l2-5 3-3 4 4 2-5 3 3" />
      <path d="M3 21h18" />
      <circle cx="9" cy="8" r="1.6" />
    </svg>
  ),
  sell: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M20 4L12 12" />
      <path d="M9 5H5v14h14v-4" />
    </svg>
  ),
  buy: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h18l-1.5 10a2 2 0 01-2 1.7H6.5A2 2 0 014.5 17L3 7z" />
      <path d="M3 7l1-3h16l1 3" />
      <path d="M9 10v3M15 10v3" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 border-t border-white/5 bg-[#0c0c12] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">One-Stop Garage</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Rent. Sell. Buy. Done.
          </h2>
          <p className="mt-4 text-zinc-400">
            Three ways to get what you want from the same trusted garage — no runarounds, no
            dealership games.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 110} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101016] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                  {icons[service.icon]}
                </span>

                <h3 className="mt-6 text-xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.desc}</p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.href}
                  className="group/cta mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                >
                  {service.cta}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
