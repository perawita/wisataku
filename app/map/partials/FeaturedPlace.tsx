"use client";

import { useState, useRef } from "react";
import { Regency, REGENCY } from "@/lib/regency";
import RegencyCard from "@/components/RegencyCard";
import { useLang } from "@/components/LanguageProvider";
import { usePlace } from "@/context/PlaceContext";

const ITEMS_PER_PAGE = 3;

export function FeaturedPlace() {
  const { lang } = useLang();
  const { setActivePlace } = usePlace(); // <-- ambil setActivePlace global
  const [page, setPage] = useState(0);
  const [lastDirection, setLastDirection] = useState<"prev" | "next" | null>(
    "prev"
  );


  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const totalPages = Math.ceil(REGENCY.length / ITEMS_PER_PAGE);
  const currentPlaces = REGENCY.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const prevPage = () => {
    setLastDirection("prev");
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setLastDirection("next");
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const focusPlace = (regency: Regency) => {
    setActivePlace(regency || REGENCY[1]);


    // tunggu DOM siap
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // target scroll ke bawah (map / detail)

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="rounded-[2.5rem] bg-sky-50 p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
                🌏 {lang === "id" ? "Jelajahi tanpa batas" : "Explore without limits"}
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                {lang === "id" ? "Destinasi Pilihan" : "Curated Destinations"}
              </h2>
            </div>

            <div className="flex items-center gap-4 max-w-xl text-right">
              <p className="text-slate-600 text-sm md:text-base">
                {lang === "id"
                  ? "Pilihan destinasi terbaik untuk pengalaman tak terlupakan."
                  : "Handpicked destinations crafted for unforgettable journeys."}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={prevPage}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
                    lastDirection === "prev"
                      ? "bg-amber-400 border-amber-400 text-black shadow-md"
                      : "border-slate-300 text-slate-700 hover:bg-amber-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextPage}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
                    lastDirection === "next"
                      ? "bg-amber-400 border-amber-400 text-black shadow-md"
                      : "border-slate-300 text-slate-700 hover:bg-amber-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 auto-rows-fr">
            {currentPlaces.map((place) => {
              const placeData = {
                ...place,
                location: typeof place.location === "string" ? place.location : place.location[lang],
              };
              return (
                <div key={place.id} className={`h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${place.id === 1 ? "lg:col-span-2" : "lg:col-span-1"}`}>
                  <button onClick={() => focusPlace(place)}>
                    <RegencyCard place={placeData} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= SCROLL TARGET ================= */}
      <div ref={scrollTargetRef} className="mt-20" />
    </section>
  );
}
