"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const FORCE_BG_PREFIX = ["/map", "/about", "/daftar-wisata"];
  const forceBg = FORCE_BG_PREFIX.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  const navItems = [
    { href: "/home", label: lang === "id" ? "Beranda" : "Home" },
    { href: "/daftar-wisata", label: t("daftarTitle") },
    { href: "/map", label: t("mapTitle") },
    { href: "/about", label: lang === "id" ? "Tentang" : "About" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300
          ${
            scrolled || forceBg
              ? "bg-black/70 backdrop-blur-xl shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link
              href="/home"
              className="text-white font-bold text-xl tracking-wide"
            >
              {t("siteTitle")}
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-white/90 hover:text-white transition"
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              {/* LANG (DESKTOP) */}
              <div className="hidden sm:flex items-center gap-1 border border-white/30 rounded-full p-1 backdrop-blur">
                {["id", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l as "id" | "en")}
                    className={`px-4 py-1.5 rounded-full text-sm transition ${
                      lang === l
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-white text-3xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-60 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm
          bg-black/90 backdrop-blur-xl
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col h-full">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-bold text-lg">
                {t("siteTitle")}
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-6 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-white transition hover:text-amber-400 ${
                    pathname === item.href ? "text-amber-400" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* LANG */}
            <div className="mt-auto pt-6 border-t border-white/20 flex gap-3">
              <button
                onClick={() => setLang("id")}
                className={`flex-1 py-2 rounded-full ${
                  lang === "id"
                    ? "bg-white text-black"
                    : "border border-white/30 text-white"
                }`}
              >
                Indonesia
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex-1 py-2 rounded-full ${
                  lang === "en"
                    ? "bg-white text-black"
                    : "border border-white/30 text-white"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
