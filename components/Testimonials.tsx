import Reveal from "./Reveal";

type Review = {
  name: string;
  role: string;
  text: string;
  stars: number;
};

const reviews: Review[] = [
  {
    name: "Ayesha Khan",
    role: "Rented Aurora GT",
    text: "Booked the coupe for my anniversary in under five minutes. The car was showroom clean and the pickup was genuinely instant. Best rental experience I've ever had.",
    stars: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Sold his SUV",
    text: "Got an offer 30% above what a dealer quoted. No pressure, no paperwork runaround — the money hit my account the same afternoon.",
    stars: 5,
  },
  {
    name: "Sara Malik",
    role: "Bought Phantom EV",
    text: "Financed through Velocity with a 4.9% rate and took delivery in two days. The 200-point inspection report gave me total peace of mind.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.4 6.6H21l-5.3 3.9 2 6.5L12 15l-5.7 4 2-6.5L3 8.6h6.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Reviews</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Loved by Thousands of Drivers
          </h2>
          <p className="mt-4 text-zinc-400">
            Don&apos;t take our word for it — here&apos;s what the Velocity Motors community says.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#101016] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10">
                <Stars count={review.stars} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 text-sm font-bold text-amber-400">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-zinc-500">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
