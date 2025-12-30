"use client";

import { useEffect } from "react";
import WeatherBMKGDetail from "@/components/WeatherBMKGDetail";
import { usePlace } from "@/context/PlaceContext";
import { WeatherCondition } from "@/components/WeatherCondition";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import { env } from "@/configuration/env";
import WaButton from "@/components/WaButton";

const MapSectionClient = dynamic(
  () => import("../../../components/MapSectionClient"),
  { ssr: false, loading: () => <p>Loading map...</p> }
);

export default function DetailWisataClient({ place }: { place: any }) {
  const { setActivePlace } = usePlace();
  const { lang } = useLang();

  useEffect(() => {
    setActivePlace(place);
  }, [place, setActivePlace]);

  const waText = encodeURIComponent(
    lang === "id"
      ? `Halo, saya tertarik mengunjungi ${place.name.id}. Apakah tersedia driver wisata?`
      : `Hello, I'm interested in visiting ${place.name.en}. Is a tour driver available?`
  );

  const waLink = `https://wa.me/${env.PHONE}?text=${waText}`;

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-24 sm:px-8 lg:px-16">
      <main className="mx-auto max-w-6xl space-y-14">
        {/* ================= IMAGE ================= */}
        <div className="relative h-[280px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-3xl">
          <img
            src={place.image}
            alt={place.name.id}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* ================= CONTENT ================= */}
        <section className="space-y-10">
          {/* TITLE */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900">
              {lang === "id" ? place.name.id : place.name.en}
            </h1>

            <p className="max-w-3xl leading-relaxed text-zinc-600 text-sm sm:text-base">
              {lang === "id"
                ? place.description.id
                : place.description.en}
            </p>
          </div>

          {/* ================= INFO CARD ================= */}
          <div className="grid gap-4 rounded-2xl bg-white p-5 sm:p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
            <Info label="Kategori" value={place.category} />
            <Info label="Lokasi" value={place.location} />
            <Info label="Kabupaten" value={place.regency ?? "-"} />
            <Info
              label="Kode Wilayah"
              value={place.kode_wilayah_tingkat_iv ?? "-"}
            />

            {/* WEATHER */}
            <div className="sm:col-span-2 lg:col-span-1">
              <WeatherCondition />
            </div>
          </div>

          {/* ================= MAP ================= */}
          <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl">
            <MapSectionClient />
          </div>

          {/* ================= WEATHER BMKG ================= */}
          <WeatherBMKGDetail
            kodeWilayah={place.kode_wilayah_tingkat_iv}
          />
        </section>
      </main>
        <WaButton waLink={waLink} />
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-wide text-zinc-400">
        {label}
      </p>
      <p className="font-medium text-zinc-800 text-sm sm:text-base">
        {value}
      </p>
    </div>
  );
}
