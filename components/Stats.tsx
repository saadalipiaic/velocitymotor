import Reveal from "./Reveal";

const stats = [
  { value: "12,500+", label: "Rentals completed" },
  { value: "350+", label: "Cars in fleet" },
  { value: "4.9/5", label: "Average rating" },
  { value: "98%", label: "Owner satisfaction" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-[#0c0c12]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="group relative bg-[#0c0c12] p-8 text-center sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
