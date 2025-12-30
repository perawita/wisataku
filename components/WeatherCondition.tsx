"use client";

import { useEffect, useState } from "react";
import { usePlace } from "@/context/PlaceContext";

type WeatherData = {
  temp: string;
  temp_min: string;
  range_view: string;
  desc: string;
  location: string;
  icon?: string;
};

export function WeatherCondition() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { activePlace } = usePlace();

  useEffect(() => {
    if (!activePlace?.kode_wilayah_tingkat_iv) return;

    let interval: ReturnType<typeof setInterval>;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/cuaca?adm4=${activePlace.kode_wilayah_tingkat_iv}`
        );
        const data = await res.json();

        const cuacaHariPertama = data?.data?.[0]?.cuaca?.[0]?.[0];

        if (cuacaHariPertama) {
          setWeather({
            temp: cuacaHariPertama.t ?? "N/A",
            temp_min: cuacaHariPertama.ws ?? "N/A",
            range_view: cuacaHariPertama.vs_text ?? "N/A",
            desc: cuacaHariPertama.weather_desc ?? "N/A",
            icon: cuacaHariPertama.image ?? "",
            location:
              data?.lokasi?.desa ??
              data?.lokasi?.kecamatan ??
              "Lokasi Tidak Ditemukan",
          });
        }

        setLoading(false);
      } catch (err) {
        console.error("Gagal mengambil data cuaca:", err);
        setLoading(false);
      }
    };

    // Fetch pertama kali
    fetchWeather();

    // Interval fetch setiap 5 menit (300000 ms)
    interval = setInterval(fetchWeather, 300000);

    // Cleanup interval saat component unmount atau activePlace berubah
    return () => clearInterval(interval);
  }, [activePlace?.kode_wilayah_tingkat_iv]);

  if (loading) return <p>Loading cuaca...</p>;
  if (!weather) return <p>Data cuaca tidak tersedia.</p>;

  return (
    <div className="relative w-[342px] h-[184px] p-[20px] text-dark flex flex-col justify-between ">
      {/* Background SVG */}
      <svg
        viewBox="0 0 342 175"
        width={342}
        height={175}
        className="absolute inset-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1={0}
            y1={128}
            x2={354.142}
            y2={128}
          >
            <stop stopColor="#5936B4" />
            <stop offset={1} stopColor="#362A84" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon cuaca */}
      {weather.icon && (
        <img
          src={weather.icon}
          alt={weather.desc}
          className="absolute right-4 -top-4 w-20 h-20"
        />
      )}

      {/* Temperatur */}
      <p className="text-[48px] z-[2] leading-none">{weather.temp}°C</p>

      {/* Info detail */}
      <div className="flex justify-between">
        <div>
          <p className="text-[rgba(89,89,89,0.6)]">
            Visibility: {weather.range_view}
          </p>
          <p>{weather.location}</p>
        </div>
        <p className="self-end">{weather.desc}</p>
      </div>
    </div>
  );
}
