"use client";
import { useLang } from "@/components/LanguageProvider";

export default function WhyChooseUs() {
  const { lang } = useLang();

  const reasons = [
    {
      icon: "🌺",
      title: lang === "id" ? "Destinasi Eksklusif" : "Exclusive Destinations",
      desc:
        lang === "id"
          ? "Koleksi tempat wisata premium yang dipilih secara selektif untuk pengalaman terbaik."
          : "A selective collection of premium destinations for an exceptional experience.",
    },
    {
      icon: "🗺️",
      title: lang === "id" ? "Panduan Premium" : "Premium Guidance",
      desc:
        lang === "id"
          ? "Peta interaktif dan rekomendasi personal untuk perjalanan yang lebih terarah."
          : "Interactive maps and personalized recommendations for guided journeys.",
    },
    {
      icon: "✨",
      title: lang === "id" ? "Ulasan Terpercaya" : "Trusted Reviews",
      desc:
        lang === "id"
          ? "Testimoni autentik dari wisatawan yang telah menjelajahi Lombok bersama kami."
          : "Authentic testimonials from travelers who explored Lombok with us.",
    },
    {
      icon: "📱",
      title: lang === "id" ? "Akses Fleksibel" : "Seamless Access",
      desc:
        lang === "id"
          ? "Pengalaman mulus di semua perangkat, kapan pun Anda membutuhkannya."
          : "A seamless experience across all devices, anytime you need it.",
    },
  ];

  return (
    <section className="py-10 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-5 text-sm tracking-widest uppercase
                           text-amber-500 font-semibold">
            {lang === "id" ? "Keunggulan Kami" : "Our Excellence"}
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl
                         font-semibold text-slate-900
                         leading-tight">
            {lang === "id" ? "Mengapa Wisataku?" : "Why Wisataku?"}
          </h2>

          <div className="mt-8 w-28 h-px mx-auto bg-slate-200" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative rounded-2xl
                         border border-slate-200
                         bg-white
                         p-8
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:border-amber-400
                         hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 text-4xl">
                {reason.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-slate-900
                           mb-3
                           transition-colors duration-300
                           group-hover:text-amber-600"
              >
                {reason.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-600 leading-relaxed text-sm">
                {reason.desc}
              </p>

              {/* Subtle corner accent */}
              <span
                className="absolute top-4 right-4 w-2 h-2 rounded-full
                           bg-amber-400 opacity-0
                           group-hover:opacity-100
                           transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
