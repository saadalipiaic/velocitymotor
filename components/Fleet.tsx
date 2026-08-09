import Image from "next/image";
import Reveal from "./Reveal";

type Car = {
  name: string;
  tag: string;
  price: string;
  daily?: string;
  specs: { label: string; value: string }[];
  image: string;
  alt: string;
  badge?: string;
};

const cars: Car[] = [
  {
    name: "Aurora GT",
    tag: "Luxury Coupe",
    price: "$289/day",
    daily: "or $129,000 buy",
    specs: [
      { label: "Top speed", value: "310 km/h" },
      { label: "0–100", value: "3.2s" },
      { label: "Power", value: "650 hp" },
    ],
    image: "/cars/coupe.png",
    alt: "Blue luxury sports coupe parked on the road",
    badge: "Best Seller",
  },
  {
    name: "Vanguard R8",
    tag: "Performance SUV",
    price: "$214/day",
    daily: "or $96,500 buy",
    specs: [
      { label: "Seats", value: "7" },
      { label: "Range", value: "620 km" },
      { label: "Drive", value: "AWD" },
    ],
    image: "/cars/suv.png",
    alt: "Performance SUV driving on a mountain road",
    badge: "Family Pick",
  },
  {
    name: "Ember S",
    tag: "Sports Convertible",
    price: "$342/day",
    daily: "or $148,000 buy",
    specs: [
      { label: "Top speed", value: "290 km/h" },
      { label: "0–100", value: "4.1s" },
      { label: "Power", value: "520 hp" },
    ],
    image: "/cars/conv.png",
    alt: "Red sports convertible on the highway",
  },
  {
    name: "Phantom EV",
    tag: "Electric Sedan",
    price: "$176/day",
    daily: "or $78,900 buy",
    specs: [
      { label: "Range", value: "540 km" },
      { label: "Charge", value: "30 min" },
      { label: "Drive", value: "RWD" },
    ],
    image: "/cars/sedan.png",
    alt: "Black electric luxury sedan parked on the street",
    badge: "Eco Choice",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Our Fleet</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Every Car, One Platform
          </h2>
          <p className="mt-4 text-zinc-400">
            Rent by the day or take it home for good. Every vehicle is inspected, insured and ready
            to roll the moment you sign.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car, i) => (
            <Reveal key={car.name} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101016] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">
                {car.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black">
                    {car.badge}
                  </span>
                )}

                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101016] via-transparent to-transparent" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 pt-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight">{car.name}</h3>
                      <p className="text-sm text-zinc-500">{car.tag}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-amber-400">{car.price}</p>
                      <p className="text-xs text-zinc-500">{car.daily}</p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-3 gap-2 rounded-2xl bg-white/[0.04] p-3">
                    {car.specs.map((s) => (
                      <div key={s.label} className="text-center">
                        <dt className="text-[10px] uppercase tracking-wide text-zinc-500">{s.label}</dt>
                        <dd className="mt-0.5 text-sm font-semibold">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto flex gap-2">
                    <a
                      href="#rentals"
                      className="flex-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-3 text-center text-sm font-semibold text-black transition-all hover:brightness-110"
                    >
                      Rent
                    </a>
                    <a
                      href="#sell"
                      className="flex-1 rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/5"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={150}>
          <a
            href="#rentals"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            View all 350+ cars
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
