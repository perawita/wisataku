"use client";

import WaButton from "@/components/WaButton";
import { useLang } from "../../components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 px-4 sm:px-8 lg:px-20 py-28">
      <main className="mx-auto max-w-5xl space-y-20">

        {/* HEADER */}
        <header className="text-center space-y-6">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium tracking-wide text-amber-700">
            Wisataku
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            {lang === "id" ? "Tentang Wisataku" : "About Wisataku"}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-600">
            {lang === "id"
              ? "Wisataku adalah platform penyedia layanan driver dan transportasi perjalanan wisata yang melayani seluruh wilayah Pulau Lombok. Kami hadir untuk membantu wisatawan menjelajahi destinasi terbaik Lombok dengan aman, nyaman, dan fleksibel."
              : "Wisataku is a travel transportation and driver service platform serving the entire Lombok Island. We help travelers explore Lombok’s best destinations safely, comfortably, and flexibly."}
          </p>
        </header>

        {/* MISSION & SERVICES */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
            <h2 className="text-xl font-semibold text-zinc-900">
              {lang === "id" ? "Misi Kami" : "Our Mission"}
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              {lang === "id"
                ? "Misi Wisataku adalah memberikan pengalaman perjalanan yang menyenangkan dengan menghubungkan wisatawan kepada driver lokal profesional yang memahami medan, budaya, dan destinasi wisata Lombok secara mendalam."
                : "Wisataku’s mission is to provide an enjoyable travel experience by connecting travelers with professional local drivers who deeply understand Lombok’s terrain, culture, and tourist destinations."}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
            <h2 className="text-xl font-semibold text-zinc-900">
              {lang === "id" ? "Layanan Kami" : "Our Services"}
            </h2>
            <ul className="mt-4 space-y-3 text-zinc-600">
              {[
                ["Driver wisata harian & perjalanan beberapa hari", "Daily and multi-day tour drivers"],
                ["Transportasi bandara & hotel", "Airport and hotel transportation"],
                ["Penyusunan itinerary wisata sesuai kebutuhan", "Custom travel itinerary planning"],
                ["Kunjungan destinasi wisata & penginapan", "Tourist destination and accommodation visits"],
                ["Wisata alam, budaya, dan pantai", "Nature, cultural, and beach tours"],
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <span>
                    {lang === "id" ? item[0] : item[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOP */}
        <section className="rounded-3xl bg-white p-10 shadow-lg ring-1 ring-zinc-100">
          <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900">
            {lang === "id"
              ? "SOP & Perjanjian Driver Transportasi"
              : "Driver SOP & Transportation Agreement"}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              [
                "Profesionalitas Driver",
                "Driver Professionalism",
                "Driver Wisataku wajib bersikap sopan, ramah, tepat waktu, dan memberikan pelayanan terbaik kepada pelanggan.",
                "Wisataku drivers must be polite, friendly, punctual, and provide the best service to customers.",
              ],
              [
                "Keamanan & Kenyamanan",
                "Safety & Comfort",
                "Kendaraan harus dalam kondisi layak jalan, bersih, dan dilengkapi perlengkapan keselamatan. Keselamatan penumpang adalah prioritas utama.",
                "Vehicles must be roadworthy, clean, and equipped with safety features. Passenger safety is the top priority.",
              ],
              [
                "Ketepatan Rute & Jadwal",
                "Route & Schedule Accuracy",
                "Driver mengikuti rute dan jadwal yang telah disepakati, kecuali terdapat perubahan atas persetujuan bersama.",
                "Drivers follow agreed routes and schedules unless changes are made with mutual consent.",
              ],
              [
                "Transparansi Biaya",
                "Cost Transparency",
                "Seluruh biaya perjalanan disepakati di awal dan tidak diperbolehkan adanya biaya tambahan tanpa persetujuan pelanggan.",
                "All travel costs are agreed upon in advance, and no additional charges are allowed without customer approval.",
              ],
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-semibold text-zinc-800">
                  {lang === "id" ? item[0] : item[1]}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {lang === "id" ? item[2] : item[3]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <br />
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-white p-8 ring-1 ring-amber-200">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-zinc-900">
              {lang === "id" ? "Hubungi Kami" : "Contact Us"}
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-700 leading-relaxed">
              {lang === "id"
                ? "Untuk pemesanan driver, informasi perjalanan, atau kerja sama, silakan hubungi tim Wisataku melalui kontak resmi yang tersedia di website ini."
                : "For driver bookings, travel information, or partnerships, please contact the Wisataku team through the official contact listed on this website."}
            </p>
          </div>

          {/* decorative blur */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        </section>


        <WaButton />

      </main>
    </div>
  );
}
