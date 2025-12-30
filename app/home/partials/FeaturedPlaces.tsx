"use client";

import { useState } from "react";
import { PLACES } from "@/lib/places";
import PlaceCard from "@/components/PlaceCard";
import { useLang } from "@/components/LanguageProvider";

const ITEMS_PER_PAGE = 3;

export default function FeaturedPlaces() {
  const { lang } = useLang();
  const [page, setPage] = useState(0);
  const [lastDirection, setLastDirection] =
    useState<"prev" | "next" | null>("prev");

  const totalPages = Math.ceil(PLACES.length / ITEMS_PER_PAGE);

  const currentPlaces = PLACES.slice(
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

  return (
    <section className="py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CARD CONTAINER */}
        <div className="rounded-3xl md:bg-sky-50 md:p-8 lg:p-12">

          {/* HEADER */}
          <div
            className="
              flex flex-col
              md:flex-row md:items-center md:justify-between
              gap-6 md:gap-10
              mb-10 md:mb-14
            "
          >
            {/* LEFT */}
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
                🌏 {lang === "id" ? "Jelajahi tanpa batas" : "Explore without limits"}
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                {lang === "id" ? "Destinasi Pilihan" : "Curated Destinations"}
              </h2>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex flex-col sm:flex-row
                items-center sm:items-end
                gap-4 sm:gap-6
                text-center sm:text-right
                max-w-xl
              "
            >
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "id"
                  ? "Pilihan destinasi terbaik untuk pengalaman tak terlupakan."
                  : "Handpicked destinations crafted for unforgettable journeys."}
              </p>

              {/* NAVIGATION */}
              <div className="flex items-center gap-2 shrink-0">
                {/* PREV */}
                <button
                  onClick={prevPage}
                  aria-label="Previous"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition
                    ${
                      lastDirection === "prev"
                        ? "bg-amber-400 border-amber-400 text-black shadow-md"
                        : "border-slate-300 text-slate-700 hover:bg-amber-100"
                    }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* NEXT */}
                <button
                  onClick={nextPage}
                  aria-label="Next"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition
                    ${
                      lastDirection === "next"
                        ? "bg-amber-400 border-amber-400 text-black shadow-md"
                        : "border-slate-300 text-slate-700 hover:bg-amber-100"
                    }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* PLACES GRID */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6 lg:gap-8
              mb-12 md:mb-16
            "
          >
            {currentPlaces.map((place) => (
              <div
                key={place.id}
                className="
                  transform transition duration-500
                  hover:-translate-y-2 hover:shadow-xl
                "
              >
                <PlaceCard place={place} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
