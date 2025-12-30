"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";

const ITEMS_PER_PAGE = 3;

export default function TestimonialSection() {
  const { lang } = useLang();
  const [page, setPage] = useState(0);
  const [lastDirection, setLastDirection] = useState<"prev" | "next">("prev");

  const testimonials = [
    {
      id: 1,
      name: "Ayu Pramesti",
      role: lang === "id" ? "Wisatawan Domestik" : "Domestic Traveler",
      message:
        lang === "id"
          ? "Pengalaman yang benar-benar premium. Semua destinasi terasa eksklusif dan tertata rapi. Wisataku membuat liburan saya di Lombok tak terlupakan."
          : "A truly premium experience. Every destination felt exclusive and well-curated.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Anderson",
      role: "International Traveler",
      message:
        lang === "id"
          ? "Pelayanan luar biasa dan rekomendasi tempat yang sangat akurat."
          : "Outstanding service and highly accurate recommendations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rizky Mahendra",
      role: "Digital Nomad",
      message:
        lang === "id"
          ? "Desain aplikasinya elegan dan sangat mudah digunakan."
          : "Elegant and extremely easy to use.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sarah Kim",
      role: "Travel Blogger",
      message:
        lang === "id"
          ? "Kurasi destinasi dan tampilannya terasa sangat premium."
          : "Destination curation and UI feel truly premium.",
      rating: 5,
    },
  ];

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const currentTestimonials = testimonials.slice(
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
    <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* MAGIC CARD */}
        <div className="relative rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden">

          {/* AURORA BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-indigo-100 to-emerald-100 bg-[length:200%_200%] animate-aurora" />

          {/* GLOW */}
          <div className="absolute -top-32 -left-32 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-amber-300/40 rounded-full blur-[120px] sm:blur-[150px]" />
          <div className="absolute bottom-0 -right-32 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-emerald-300/40 rounded-full blur-[120px] sm:blur-[150px]" />

          {/* GLASS */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-2xl" />

          {/* CONTENT */}
          <div className="relative z-10 px-4 sm:px-8 md:px-16 py-14 sm:py-20 md:py-24">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12 md:mb-16">

              {/* LEFT */}
              <div>
                <span className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm sm:text-base">
                  💬 {lang === "id" ? "Testimoni Pengguna" : "User Testimonials"}
                </span>

                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                  {lang === "id" ? "Apa Kata Mereka?" : "What Do They Say?"}
                </h2>

                <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600">
                  {lang === "id"
                    ? "Cerita nyata dari traveler yang merasakan pengalaman premium."
                    : "Real stories from travelers who experienced premium journeys."}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-center md:items-end gap-4">
                {/* RATING */}
                <div className="text-center md:text-right">
                  <div className="flex justify-center md:justify-end gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-xl sm:text-2xl bg-gradient-to-br from-amber-400 to-yellow-300 bg-clip-text text-transparent"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="mt-1 text-slate-700 text-xs sm:text-sm">
                    <span className="font-semibold text-base">5.0</span>
                    <span className="mx-1">•</span>
                    {lang === "id" ? "120+ ulasan" : "120+ reviews"}
                  </div>
                </div>

                {/* NAV */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPage}
                    className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border transition ${
                      lastDirection === "prev"
                        ? "bg-amber-400 border-amber-400 text-black"
                        : "border-slate-300 text-slate-700 hover:bg-amber-100"
                    }`}
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextPage}
                    className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border transition ${
                      lastDirection === "next"
                        ? "bg-amber-400 border-amber-400 text-black"
                        : "border-slate-300 text-slate-700 hover:bg-amber-100"
                    }`}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {currentTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    “{item.message}”
                  </p>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span
                        key={i}
                        className="text-lg bg-gradient-to-br from-amber-400 to-yellow-300 bg-clip-text text-transparent"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <h4 className="font-semibold text-base sm:text-lg text-slate-900">
                    {item.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-500">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
