"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageProvider";

export default function HeroBanner() {
  const { lang } = useLang();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/mountain-mountain-view-rinjani-lombok.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full max-w-7xl px-6 lg:px-12 text-white">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight text-left">
              {lang === "id" ? (
                <>
                  Jelajahi Keindahan <br />
                  <span className="text-amber-400">Pariwisata Indonesia</span>
                </>
              ) : (
                <>
                  Explore the Beauty of <br />
                  <span className="text-amber-400">Indonesian Tourism</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-white/80 leading-relaxed text-left">
              {lang === "id"
                ? "Bangkitkan semangat petualanganmu dengan destinasi populer dan tersembunyi di seluruh nusantara."
                : "Awaken your sense of adventure with popular and hidden destinations across Indonesia."}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              <Link
                href="/daftar-wisata"
                className="px-7 py-3.5 rounded-xl bg-amber-500 text-black
                     hover:bg-amber-400 transition font-semibold shadow-lg"
              >
                {lang === "id" ? "Mulai Jelajah" : "Start Exploring"}
              </Link>

              <Link
                href="/map"
                className="px-7 py-3.5 rounded-xl border border-white/40
                     hover:bg-white/10 transition backdrop-blur"
              >
                {lang === "id" ? "Lihat Peta" : "View Map"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
