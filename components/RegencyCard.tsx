"use client";

import type { Regency } from "../lib/regency";
import { useLang, useT } from "./LanguageProvider";

export default function RegencyCard({ place }: { place: Regency }) {
  const { lang } = useLang();
  const t = useT();

  return (
    <article
      className="group relative h-[360px]
                 overflow-hidden rounded-md
                 transition-all duration-300"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={place.image}
        alt={place.name[lang]}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* EXPANDING CIRCLE – ORANGE GOLD */}
      <span
        className="absolute -top-4 -right-4 z-10
                   h-8 w-8 rounded-full
                   bg-amber-500
                   transition-transform duration-300 ease-out
                   group-hover:scale-[21]"
      />

      {/* CONTENT */}
      <div className="relative z-20 flex h-full flex-col justify-end p-6">
        <h3
          className="text-lg font-semibold text-white
                     transition-colors duration-300
                     group-hover:text-amber-200"
        >
          {place.name[lang]}
        </h3>

        <p className="mt-1 text-sm text-white/80">
          📍 {typeof place.location === 'string' ? place.location : place.location[lang]}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white/80 line-clamp-3">
          {place.description[lang]}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span
            className="text-sm font-semibold text-white
                       transition-colors duration-300
                       group-hover:text-amber-300"
          >
            {t("lihat")}
          </span>

          <span className="text-xs text-white/60">
            Lombok, NTB
          </span>
        </div>
      </div>

      {/* GO CORNER – ORANGE GOLD */}
      <div
        className="absolute top-0 right-0 z-30
                   flex h-8 w-8 items-center justify-center
                   rounded-bl-[32px]
                   bg-amber-500
                   transition-colors duration-300
                   group-hover:bg-amber-400"
      >
        <span className="text-white text-lg -mt-1 -mr-1">→</span>
      </div>
    </article>
  );
}
