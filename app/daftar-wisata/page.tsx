"use client";

import { useMemo, useState } from "react";
import { PLACES } from "@/lib/places";
import PlaceCard from "@/components/PlaceCard";
import { useLang } from "@/components/LanguageProvider";
import FinalCTA from "./partials/FinalCTA";
import { PlaceProvider } from "@/context/PlaceContext";
import WaButton from "@/components/WaButton";


type CategoryFilter = "semua" | "destinasi" | "penginapan";

export default function DaftarWisataPage() {
  const { lang } = useLang();

  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("semua");

  const [activeRegency, setActiveRegency] =
    useState<string>("Semua");

  /* =========================
     LIST KABUPATEN (DINAMIS)
     ========================= */
  const regencies = useMemo(() => {
    const list = PLACES
      .map((p) => p.regency)
      .filter(Boolean) as string[];

    return ["Semua", ...Array.from(new Set(list))];
  }, []);

  /* =========================
     FILTER LOGIC
     ========================= */
  const filteredPlaces = useMemo(() => {
    let data = PLACES;

    if (activeCategory !== "semua") {
      data = data.filter(
        (p) => p.category === activeCategory
      );
    }

    if (activeRegency !== "Semua") {
      data = data.filter(
        (p) => p.regency === activeRegency
      );
    }

    return data;
  }, [activeCategory, activeRegency]);

  return (
    <PlaceProvider>
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-16">

        {/* ================= HEADER ================= */}
        <header className="mb-16 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium tracking-wide text-amber-700">
            Wisataku
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            {lang === "id"
              ? "Daftar Destinasi & Penginapan"
              : "Destinations & Accommodations"}
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-600">
            {lang === "id"
              ? "Kurasi destinasi wisata dan penginapan terbaik di Pulau Lombok, dari yang paling populer hingga yang tersembunyi."
              : "A curated list of Lombok’s finest destinations and accommodations, from popular highlights to hidden gems."}
          </p>
        </header>

        {/* ================= FILTER JENIS ================= */}
        <section className="mb-10 flex flex-wrap justify-center gap-4">
          {[
            {
              key: "semua",
              id: "Semua",
              en: "All",
            },
            {
              key: "destinasi",
              id: "Destinasi Wisata",
              en: "Tourist Destinations",
            },
            {
              key: "penginapan",
              id: "Hotel & Penginapan",
              en: "Hotels & Stays",
            },
          ].map((item) => {
            const active = activeCategory === item.key;

            return (
              <button
                key={item.key}
                onClick={() =>
                  setActiveCategory(item.key as CategoryFilter)
                }
                className={`
                  rounded-full px-6 py-2 text-sm font-semibold transition-all
                  ${
                    active
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-200"
                      : "bg-white/70 backdrop-blur border border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                  }
                `}
              >
                {lang === "id" ? item.id : item.en}
              </button>
            );
          })}
        </section>

        {/* ================= FILTER KABUPATEN ================= */}
        <section className="mb-12 flex justify-center">
          <select
            value={activeRegency}
            onChange={(e) => setActiveRegency(e.target.value)}
            className="
              w-full max-w-sm rounded-2xl border border-zinc-200
              bg-white/80 backdrop-blur px-5 py-3 text-sm
              text-zinc-700 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-amber-400
            "
          >
            {regencies.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
        </section>

        {/* ================= RESULT INFO ================= */}
        <p className="mb-10 text-center text-sm text-zinc-500">
          {lang === "id" ? "Menampilkan" : "Showing"}{" "}
          <span className="font-semibold text-zinc-800">
            {filteredPlaces.length}
          </span>{" "}
          {lang === "id" ? "data terpilih" : "selected results"}
        </p>

        {/* ================= GRID ================= */}
        {filteredPlaces.length === 0 ? (
          <div className="flex h-64 items-center justify-center rounded-3xl border bg-white shadow-sm">
            <p className="text-zinc-500">
              {lang === "id"
                ? "Data tidak ditemukan"
                : "No data found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        )}
      </main>

      <FinalCTA />

      <WaButton />
    </div>
    </PlaceProvider>
  );
}
