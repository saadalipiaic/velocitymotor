import Image from "next/image";

const columns = [
  {
    title: "Services",
    links: ["Car Rental", "Buy a Car", "Sell Your Car", "Fleet Management", "Corporate Rentals"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog", "Partners"],
  },
  {
    title: "Support",
    links: ["Help Centre", "Contact Us", "Insurance", "Terms of Service", "Privacy Policy"],
  },
];

const brands = [
  "AURORA", "VANGUARD", "EMBER", "PHANTOM", "NOVA GT", "APEX", "STRATUS", "ZENITH",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07070b]">
      <div className="border-b border-white/5 py-6">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="flex items-center gap-12 text-lg font-bold tracking-widest text-white/10">
              {brand}
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-500/30" fill="currentColor" aria-hidden="true">
                <path d="M5 16l1.5-4.5A3 3 0 019.2 9.5h5.6a3 3 0 012.7 2l1.5 4.5H5z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="currentColor" aria-hidden="true">
                  <path d="M5 16l1.5-4.5A3 3 0 019.2 9.5h5.6a3 3 0 012.7 2l1.5 4.5H5z" />
                  <path d="M4 16h16v2a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
                  <circle cx="8" cy="16" r="1.5" fill="#0a0a0f" />
                  <circle cx="16" cy="16" r="1.5" fill="#0a0a0f" />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight">
                Velocity<span className="text-amber-400">Motors</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Premium car rentals, instant sales and worry-free purchases. Driving joy, delivered to
              your doorstep since 2016.
            </p>

            <div className="relative mt-6 aspect-[16/7] w-full max-w-sm overflow-hidden rounded-xl">
              <Image
                src="/cars/sell.png"
                alt="Velocity Motors showroom car"
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                loading="lazy"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-zinc-500 transition-colors hover:text-amber-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Velocity Motors. All rights reserved.</p>
          <div className="flex gap-2">
            {["Instagram", "X", "YouTube", "Facebook"].map((social) => (
              <a
                key={social}
                href="#top"
                aria-label={social}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-amber-400/50 hover:text-amber-400"
              >
                {social === "Instagram" && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                )}
                {social === "X" && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L4 21H1l7.5-8.6L.6 3H7l4.5 5.6L17.5 3z" />
                  </svg>
                )}
                {social === "YouTube" && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M23 7.5a3 3 0 00-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 001 7.5 31 31 0 00.6 12 31 31 0 001 16.5a3 3 0 002.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 002.1-2.1A31 31 0 0023.4 12 31 31 0 0023 7.5zM10 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                )}
                {social === "Facebook" && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M14 8h3V5h-3a4 4 0 00-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 011-1z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
