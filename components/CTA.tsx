import CarVideo from "./CarVideo";

const speedLines = [15, 30, 45, 60, 75, 90];

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(245,158,11,0.14),transparent)]" aria-hidden="true" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Ready to Hit the Road?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-zinc-400">
          Join 50,000+ happy drivers. Create your free account today and get 15% off your first
          rental — or a free valuation on your own car.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#rentals"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-9 py-4 text-base font-semibold text-black shadow-xl shadow-amber-500/30 transition-all hover:shadow-amber-400/50 hover:brightness-110 sm:w-auto"
          >
            Create Free Account
          </a>
          <a
            href="#sell"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-9 py-4 text-base font-semibold backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
          >
            Talk to Sales
          </a>
        </div>
      </div>

      <div className="relative mt-20 h-64 overflow-hidden sm:h-80">
        <CarVideo
          src="/cars/drift.mp4"
          poster="/cars/cta.png"
          label="A car driving along a scenic road trip"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08080d] via-[#08080d]/50 to-transparent" aria-hidden="true" />

        {speedLines.map((top, i) => (
          <span
            key={i}
            className="speed-line absolute right-[15%] h-0.5 w-20 rounded-full bg-white/25"
            style={{ top: `${top}%`, animationDelay: `${i * 0.12}s` }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
