"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

export default function IntroSection() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden text-slate-900 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="flex flex-col space-y-40">
            <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
              🌏{" "}
              {lang === "id"
                ? "Jelajahi tanpa batas"
                : "Explore without limits"}
            </span>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-amber-500">500+</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {lang === "id" ? "Destinasi Wisata" : "Tourist Destinations"}
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">100%</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {lang === "id" ? "Wisata Lokal" : "Local Experiences"}
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-rose-500">24/7</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {lang === "id" ? "Akses Informasi" : "Information Access"}
                </p>
              </div>
            </div>

            {/* DESCRIPTION — SELARAS DENGAN STATS */}
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              {lang === "id"
                ? "Lebih dari 500 destinasi wisata terkurasi, seluruhnya berbasis pengalaman lokal autentik, dengan akses informasi yang tersedia kapan pun Anda butuhkan."
                : "Over 500 curated destinations, fully based on authentic local experiences, with information access available anytime you need."}
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col space-y-8">
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              {lang === "id"
                ? "Wisataku adalah platform wisata yang mengkurasi destinasi terbaik di Lombok, mulai dari pantai eksotis, pegunungan megah, hingga kekayaan budaya lokal. Kami membantu Anda menjelajahi Lombok secara autentik, nyaman, dan terencana."
                : "Wisataku is a travel platform curating the best destinations in Lombok — from exotic beaches and majestic mountains to rich local culture — helping you explore Lombok authentically, comfortably, and seamlessly."}
            </p>


            {/* Image Grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Gambar 1 */}
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-black/5 h-[250px]">
                <Image
                  src="/assets/img/Wisata-Alam-Gunung-Tunak-Lombok.jpg"
                  alt="Destination"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Gambar 2 */}
              <div className="relative rounded-2xl overflow-hidden bg-black/5 h-[120px]">
                <Image
                  src="/assets/img/Pantai-Goa-Landak.jpg"
                  alt="Beach"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="col-start-2 row-start-3 absolute bottom-15 right-3 sm:bottom-15 sm:right-4 md:bottom-15 md:right-5 lg:bottom-15 lg:right-6 z-10">
                <Link
                  href="/daftar-wisata"
                  className={
                    "inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2 lg:px-8 lg:py-2 rounded-xl bg-amber-500 text-white font-semibold shadow-2xl hover:bg-amber-400 transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap"
                  }
                >
                  {lang === "id" ? "Lihat Semua" : "View All"}
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
