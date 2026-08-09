import CarVideo from "./CarVideo";

const speedLines = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />

      <div className="animate-cloud absolute top-16 left-0 h-16 w-40 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
      <div
        className="animate-cloud absolute top-40 left-0 h-12 w-28 rounded-full bg-white/5 blur-2xl"
        style={{ animationDelay: "14s", animationDuration: "60s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-40 pt-16 sm:px-8 sm:pb-56 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-hero inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300" style={{ animationDelay: "0.05s" }}>
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-amber-400" />
            Trusted by 50,000+ drivers worldwide
          </div>

          <h1 className="animate-hero mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s" }}>
            Rent, Buy &amp; Sell
            <br />
            <span className="text-gradient-gold">Cars Without Limits</span>
          </h1>

          <p className="animate-hero mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg" style={{ animationDelay: "0.25s" }}>
            From luxury rentals for the weekend to a full sale or instant purchase — Velocity Motors puts
            premium cars within reach. Pick a ride, tap a button, hit the road.
          </p>

          <div className="animate-hero mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.35s" }}>
            <a
              href="#rentals"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 text-base font-semibold text-black shadow-xl shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:brightness-110 sm:w-auto"
            >
              Book a Rental
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#fleet"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              Explore Fleet
            </a>
          </div>

          <div className="animate-hero mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500" style={{ animationDelay: "0.45s" }}>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.4 6.6H21l-5.3 3.9 2 6.5L12 15l-5.7 4 2-6.5L3 8.6h6.6z" />
              </svg>
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.4 6.6H21l-5.3 3.9 2 6.5L12 15l-5.7 4 2-6.5L3 8.6h6.6z" />
              </svg>
              24/7 roadside support
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.4 6.6H21l-5.3 3.9 2 6.5L12 15l-5.7 4 2-6.5L3 8.6h6.6z" />
              </svg>
              Free cancellation
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-56 overflow-hidden sm:h-96">
        <CarVideo
          src="/cars/hero.mp4"
          poster="/cars/hero.png"
          label="A luxury car driving on the highway"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08080d] via-[#08080d]/60 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08080d]/70 to-transparent" aria-hidden="true" />

        {speedLines.map((top, i) => (
          <span
            key={i}
            className="speed-line absolute right-[15%] h-0.5 w-24 rounded-full bg-white/25"
            style={{ top: `${top}%`, animationDelay: `${i * 0.09}s` }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
