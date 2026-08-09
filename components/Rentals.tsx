"use client";

import Reveal from "./Reveal";

const selectClass =
  "w-full rounded-xl border border-white/10 bg-[#14141c] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-amber-400/60";

export default function Rentals() {
  return (
    <section id="rentals" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Book a Ride</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Your Next Drive Is
              <br />
              <span className="text-gradient-gold">Three Clicks Away</span>
            </h2>
            <p className="mt-5 max-w-md text-zinc-400">
              Tell us when and where, pick your favourite from the fleet, and a perfectly detailed
              car will be waiting — keys in your hand.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                ["Live availability", "See exactly what's free at your pickup time."],
                ["Instant pickup", "Self-serve keys or doorstep delivery."],
                ["Fair pricing", "Transparent daily rates. Zero surprise fees."],
              ].map(([title, desc], i) => (
                <Reveal key={title} delay={i * 90} direction="right">
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-400/10 text-amber-400">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-0.5 text-sm text-zinc-400">{desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <form
              className="glass-card relative overflow-hidden rounded-3xl p-7 sm:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />

              <h3 className="text-xl font-bold tracking-tight">Find your car</h3>
              <p className="mt-1 text-sm text-zinc-400">No payment needed to search.</p>

              <div className="mt-7 grid gap-5">
                <div>
                  <label htmlFor="pickup" className="mb-2 block text-sm font-medium text-zinc-300">
                    Pickup location
                  </label>
                  <select id="pickup" className={selectClass} defaultValue="Karachi City Centre">
                    <option>Karachi City Centre</option>
                    <option>Jinnah International Airport</option>
                    <option>Clifton, Seaview</option>
                    <option>Bahria Town</option>
                    <option>DHA Phase 6</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pickup-date" className="mb-2 block text-sm font-medium text-zinc-300">
                      Pickup date
                    </label>
                    <input
                      id="pickup-date"
                      type="date"
                      className={selectClass}
                      defaultValue="2026-08-16"
                    />
                  </div>
                  <div>
                    <label htmlFor="dropoff-date" className="mb-2 block text-sm font-medium text-zinc-300">
                      Return date
                    </label>
                    <input
                      id="dropoff-date"
                      type="date"
                      className={selectClass}
                      defaultValue="2026-08-18"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="car-type" className="mb-2 block text-sm font-medium text-zinc-300">
                      Car type
                    </label>
                    <select id="car-type" className={selectClass} defaultValue="Any">
                      <option>Any</option>
                      <option>Luxury Coupe</option>
                      <option>Performance SUV</option>
                      <option>Convertible</option>
                      <option>Electric</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="driver" className="mb-2 block text-sm font-medium text-zinc-300">
                      Driver
                    </label>
                    <select id="driver" className={selectClass} defaultValue="Self-drive">
                      <option>Self-drive</option>
                      <option>With chauffeur</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-4 text-base font-semibold text-black shadow-xl shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:brightness-110"
                >
                  Search Available Cars
                </button>
                <p className="text-center text-xs text-zinc-500">
                  Free cancellation within 24 hours of pickup
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
