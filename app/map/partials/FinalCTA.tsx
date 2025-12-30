"use client";
import { useLang } from "@/components/LanguageProvider";
import Link from "next/link";

export default function FinalCTA() {
  const { lang } = useLang();

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6">

        {/* MAIN CARD */}
        <div className="relative sm:rounded-[3rem] overflow-hidden">

          {/* BG IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('/assets/img/act.webp')",
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b
            from-black/50 via-black/40 to-black/60"
          />

          {/* AURORA GLOW */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
            bg-amber-400/25 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-40 w-[500px] h-[500px]
            bg-emerald-400/25 rounded-full blur-[140px]" />

          {/* GLASS LAYER */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 text-center text-white">

            {/* Eyebrow */}
            <span className="inline-block mb-6 text-sm tracking-widest uppercase font-semibold">
              Wisataku Lombok
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl
              font-semibold leading-tight text-white/80">
              {lang === "id"
                ? "Wujudkan Liburan Impian Anda"
                : "Make Your Dream Vacation a Reality"}
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-lg md:text-xl
              text-white/80 max-w-3xl mx-auto
              leading-relaxed">
              {lang === "id"
                ? "Jelajahi keindahan Lombok yang eksklusif dan ciptakan kenangan berharga bersama Wisataku."
                : "Explore Lombok’s exclusive beauty and create meaningful memories with Wisataku."}
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">

              {/* Primary */}
              <Link
                href="/daftar-wisata"
                className="inline-flex items-center justify-center
                  px-12 py-4 rounded-full
                  bg-amber-400 hover:bg-amber-300
                  text-black font-semibold text-lg
                  transition-all duration-300
                  shadow-lg hover:shadow-amber-400/40"
              >
                {lang === "id"
                  ? "Lihat Semua Destinasi"
                  : "View All Destinations"}
              </Link>

              {/* Secondary */}
              <Link
                href="/map"
                className="inline-flex items-center justify-center
                  px-12 py-4 rounded-full
                  border border-white/40
                  font-semibold text-lg
                  hover:border-amber-400 hover:text-amber-300
                  transition-all duration-300
                  backdrop-blur-sm bg-white/10"
              >
                {lang === "id"
                  ? "Lihat Peta Interaktif"
                  : "View Interactive Map"}
              </Link>
            </div>

            {/* DIVIDER */}
            <div className="mt-20 flex justify-center">
              <div className="w-32 h-px bg-white/30" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
