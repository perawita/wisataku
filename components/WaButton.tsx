import { useLang } from "@/components/LanguageProvider";
import { env } from "@/configuration/env";

export default function WaButton({ waLink }: { waLink?: any }) {
    const { lang } = useLang();

    const waText = encodeURIComponent(
        lang === "id"
        ? `Halo, Apakah tersedia driver wisata?`
        : `Hello, Is a tour driver available?`
    );

    const direct = waLink ?? `https://wa.me/${env.PHONE}?text=${waText}`;
    return (
      <a
        href={direct}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-3
          px-6 py-3
          rounded-full
          bg-gradient-to-r from-emerald-500 to-green-500
          text-white font-semibold
          shadow-xl shadow-green-500/30
          hover:scale-105 hover:shadow-green-500/40
          transition-all duration-300
        "
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M19.11 17.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
        </svg>

        <span className="hidden sm:inline">
          {lang === "id" ? "Cari Driver Wisata" : "Find Tour Driver"}
        </span>
      </a>
    );
}