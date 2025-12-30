"use client";

import { useState, useRef, useEffect } from "react";
import PlaceCard from "@/components/PlaceCard";
import { PLACES } from "@/lib/places";
import { WeatherCondition } from "@/components/WeatherCondition";
import { useLang } from "@/components/LanguageProvider";
import { usePlace } from "@/context/PlaceContext";
import dynamic from "next/dynamic";
import WaButton from "@/components/WaButton";

const MapSectionClient = dynamic(
  () => import("../../../components/MapSectionClient"),
  { ssr: false, loading: () => <p>Loading map...</p> }
);

const ITEMS_PER_PAGE = 20;

export function DetailPlace() {
  const { lang } = useLang();
  const { activePlace } = usePlace();

  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentPlaces = PLACES.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  ).filter((place) => place.regency === activePlace?.name.id);

  /* ================= SCROLL FUNCTION ================= */
  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 320;
    const gap = 24; // gap-6
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollProgress = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  useEffect(() => {
    updateScrollProgress();
    window.addEventListener("resize", updateScrollProgress);
    return () => window.removeEventListener("resize", updateScrollProgress);
  }, [currentPlaces]);

  return (
    <section className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2.5rem] p-6 md:p-10">
          {/* ================= HEADER ================= */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div className="space-y-4">
              <WeatherCondition />
              <h4 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                {lang === "id" ? activePlace?.name.id : activePlace?.name.en}
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-left sm:text-center lg:text-right">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-500">
                  {activePlace?.total_destinations}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === "id" ? "Destinasi Wisata" : "Tourist Destinations"}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-500">
                  {activePlace?.total_culinary}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === "id" ? "Kuliner Lokal" : "Local Culinary"}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-rose-500">
                  {activePlace?.total_hotels}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === "id" ? "Hotel & Penginapan" : "Hotels & Accommodations"}
                </p>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col gap-10">
            {/* MAP */}
            <div className="w-full h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden">
              <MapSectionClient />
            </div>

            {/* DESCRIPTION */}
            <p className="max-w-2xl text-slate-600 text-sm md:text-base">
              {lang === "id"
                ? "Pilihan destinasi terbaik untuk pengalaman tak terlupakan."
                : "Handpicked destinations crafted for unforgettable journeys."}
            </p>

            {/* ================= HORIZONTAL SCROLL LIST ================= */}
            <div className="relative">
              {/* SCROLL CONTAINER */}
              <div
                ref={scrollRef}
                onScroll={updateScrollProgress}
                className="flex gap-6 overflow-x-auto sm:pb-4 sm:px-1 snap-x snap-mandatory scrollbar-hide"
              >
                {currentPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="snap-start min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[380px] transform transition duration-300 hover:-translate-y-2"
                  >
                    <PlaceCard place={place} />
                  </div>
                ))}
              </div>

              {/* SCROLL PROGRESS BAR */}
              <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-amber-500 rounded-full transition-all duration-200"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <WaButton />
      </div>
    </section>
  );
}
