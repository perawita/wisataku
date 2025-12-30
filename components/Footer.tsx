"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { env } from "@/configuration/env";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-300 py-20">
      {/* Soft top glow */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-amber-400/20 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute -top-36 -left-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-36 -right-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-400/10 rounded-full blur-2xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl text-white font-extrabold mb-4 tracking-wide">
              🌴 {env.APP_NAME}
            </h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              {lang === "id"
                ? "Platform terpercaya untuk menemukan destinasi wisata terbaik di Lombok, NTB."
                : "A trusted platform to discover the best tourism destinations in Lombok, NTB."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide text-lg">
              {lang === "id" ? "Tautan Cepat" : "Quick Links"}
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { href: "/home", labelId: "Beranda", labelEn: "Home" },
                { href: "/daftar-wisata", labelId: "Daftar Wisata", labelEn: "Places" },
                { href: "/map", labelId: "Peta", labelEn: "Map" },
                { href: "/about", labelId: "Tentang", labelEn: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition text-slate-400 hover:text-amber-400 hover:translate-x-1 duration-300 inline-block"
                  >
                    {lang === "id" ? link.labelId : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide text-lg">
              {lang === "id" ? "Hubungi Kami" : "Contact Us"}
            </h4>
            <p className="text-sm md:text-base text-slate-400 mb-2">📧 {env.EMAIL}</p>
            <p className="text-sm md:text-base text-slate-400 mb-2">📞 {env.PHONE}</p>
            <p className="text-sm md:text-base text-slate-400 mb-4">📍 Lombok, NTB, Indonesia</p>

            {/* Social Icons */}
            {/* <div className="flex space-x-4 mt-2">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-transform transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/70 pt-8">
          <p className="text-center text-sm md:text-base text-slate-400">
            © {year} {env.APP_NAME}. {lang === "id" ? "Semua hak dilindungi." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
