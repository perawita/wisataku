"use client";

import { useEffect, useState } from "react";

type CuacaItem = {
  time: string;
  desc: string;
  temp: number;
  hu: number;
  ws: number;
  wd: string;
  vs: string;
  icon?: string;
};

type CuacaHarian = {
  dayIndex: number;
  items: CuacaItem[];
};

export default function WeatherBMKGDetail({
  kodeWilayah,
}: {
  kodeWilayah?: string;
}) {
  const [days, setDays] = useState<CuacaHarian[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!kodeWilayah) return;

    const fetchBMKG = async () => {
      try {
        const res = await fetch(`/api/cuaca?adm4=${kodeWilayah}`);
        const json = await res.json();

        const cuacaPerHari =
          json?.data?.[0]?.cuaca?.map(
            (harian: any[], index: number) => ({
              dayIndex: index,
              items: harian.map((c: any) => ({
                time: c.local_datetime,
                desc: c.weather_desc,
                temp: c.t,
                hu: c.hu,
                ws: c.ws,
                wd: c.wd,
                vs: c.vs_text,
                icon: c.image?.replace(" ", "%20"),
              })),
            }),
          ) || [];

        setDays(cuacaPerHari);
      } catch (e) {
        console.error("BMKG Error", e);
      } finally {
        setLoading(false);
      }
    };

    fetchBMKG();
  }, [kodeWilayah]);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-zinc-50 to-zinc-100 p-8 shadow-xl ring-1 ring-zinc-200">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-extrabold tracking-tight text-zinc-900">
          Prakiraan Cuaca BMKG
        </h2>
        <span className="rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-700">
          Official Source
        </span>
      </div>

      {loading ? (
        <p className="text-zinc-500">Memuat data cuaca...</p>
      ) : (
        <div className="space-y-10">
          {days.map((day) => (
            <div key={day.dayIndex}>
              {/* DAY TITLE */}
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
                Hari ke-{day.dayIndex + 1}
              </h3>

              {/* GRID */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {day.items.map((w, i) => (
                  <div
                    key={i}
                    className="
                      group rounded-2xl border border-zinc-200
                      bg-white/80 backdrop-blur
                      p-5 shadow-sm transition
                      hover:-translate-y-1 hover:shadow-lg
                    "
                  >
                    <p className="text-xs text-zinc-500">
                      {w.time}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      {w.icon && (
                        <img
                          src={w.icon}
                          alt={w.desc}
                          className="h-10 w-10"
                        />
                      )}
                      <div>
                        <p className="font-semibold capitalize text-zinc-800">
                          {w.desc}
                        </p>
                        <p className="text-2xl font-extrabold text-zinc-900">
                          {w.temp}°C
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-1 text-sm text-zinc-600">
                      <li>💧 Kelembapan: {w.hu}%</li>
                      <li>🌬 Angin: {w.ws} km/j ({w.wd})</li>
                      <li>👁 Jarak pandang: {w.vs}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
