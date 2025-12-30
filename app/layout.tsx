import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";
import { env } from "@/configuration/env";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${env.APP_NAME} - Wisata, Hotel & Transportasi Lombok Terpercaya`,
    template: `%s | ${env.APP_NAME}`,
  },
  description: "Eksplorasi keindahan Lombok: Rekomendasi destinasi wisata hits, pilihan hotel terbaik, dan layanan sewa mobil/motor dengan driver profesional untuk perjalanan nyaman di dalam pulau Lombok.",
  keywords: "wisata lombok, hotel di lombok, penginapan lombok, sewa mobil lombok, rental motor lombok, transportasi lokal lombok, paket tour lombok, pantai kuta mandalika, gili trawangan, sembalun",
  robots: "index, follow",
  authors: [{ name: "Ida Bagus Perawita Yasa", url: "https://perawita-yasa.my.id" }],
  publisher: env.APP_NAME,
  openGraph: {
    title: `Panduan Wisata, Hotel & Transportasi Lokal Lombok | ${env.APP_NAME}`,
    description: "Temukan destinasi tersembunyi, hotel nyaman, dan layanan transportasi lokal terbaik di Lombok. Rencanakan perjalanan Anda dengan mudah dan aman.",
    url: env.FRONTEND_URL,
    siteName: env.APP_NAME,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${env.FRONTEND_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Eksplorasi Wisata dan Transportasi Lombok - ${env.APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${env.APP_NAME} - Spesialis Wisata & Transportasi Lokal Lombok`,
    description: "Info destinasi wisata, rekomendasi hotel, dan sewa kendaraan di Lombok. Solusi liburan praktis di dalam pulau! 🌴",
    images: [`${env.FRONTEND_URL}/og-image.png`],
  },
  metadataBase: new URL(env.FRONTEND_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: env.APP_NAME,
              url: env.FRONTEND_URL,
              logo: `${env.FRONTEND_URL}/assets/img/act.webp`,
              description: "Layanan informasi wisata, pemesanan hotel, dan jasa transportasi lokal di Pulau Lombok.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mataram",
                addressRegion: "NTB",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: env.EMAIL,
              },
            }),
          }}
        />

        {/* JSON-LD: FAQ Khusus Lokal Lombok */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Bagaimana cara berkeliling di Lombok dengan nyaman?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kami merekomendasikan layanan sewa mobil dengan driver untuk kenyamanan maksimal saat mengunjungi destinasi wisata di Lombok, atau rental motor untuk opsi yang lebih santai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah tersedia paket wisata sekaligus booking hotel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami menyediakan informasi destinasi wisata unggulan di Lombok lengkap dengan rekomendasi hotel terdekat untuk mempermudah perencanaan liburan Anda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa kisaran harga sewa kendaraan lokal di Lombok?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sewa mobil dengan driver mulai dari Rp450.000 - Rp650.000 per hari, sedangkan rental motor mulai dari Rp75.000 per hari.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <LanguageProvider>
          <Header />
          <main className="mt-0">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}