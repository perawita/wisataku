"use client";

import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polygon, Popup } from "react-leaflet";
import type { Map as LeafletMap, LatLngExpression } from "leaflet";
import { useLang } from "@/components/LanguageProvider";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { usePlace } from "@/context/PlaceContext";
import { PLACES } from "@/lib/places";

// Marker kabupaten aktif (ping)
const activeIcon = L.divIcon({
  className: "custom-marker",
  html: `<div class="w-6 h-6 rounded-full bg-amber-400 animate-ping border-2 border-white shadow-lg"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// Marker destinasi (gambar)
const placeIcon = (imgUrl: string) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div class="w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
            <img src="${imgUrl}" class="w-full h-full object-cover"/>
          </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

// Mask luar
const WORLD_BOUNDS: [number, number][] = [
  [90, -180],
  [90, 180],
  [-90, 180],
  [-90, -180],
];

// Polygon persegi untuk batas kabupaten
const getPolygonFromBounds = (lat: number, lng: number, delta = 0.25): [number, number][] => [
  [lat - delta, lng - delta],
  [lat + delta, lng - delta],
  [lat + delta, lng + delta],
  [lat - delta, lng + delta],
];

export default function MapSectionClient() {
  const { lang } = useLang();
  const mapRef = useRef<LeafletMap | null>(null);
  const { activePlace } = usePlace();

  // Filter destinasi berdasarkan kabupaten aktif
  const placesInActiveRegion = PLACES.filter(
    (p) => p.regency === activePlace?.name.id
  );

  // Fokus map saat activePlace berubah
  useEffect(() => {
    if (!mapRef.current || !activePlace) return;

    const polygon = getPolygonFromBounds(activePlace.lat, activePlace.lng);
    const bounds = L.latLngBounds(polygon as LatLngExpression[]);
    mapRef.current.fitBounds(bounds, { padding: [40, 40], animate: true });
  }, [activePlace]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl bg-gradient-to-b from-white/90 to-white/80">
      <div className="sticky top-[80px] h-[520px] w-full z-0">
        <MapContainer
          ref={(mapInstance) => {
            if (mapInstance) mapRef.current = mapInstance;
          }}
          center={activePlace ? [activePlace.lat, activePlace.lng] : [0, 0]}
          zoom={10}
          zoomControl={false}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          keyboard={false}
          className="h-full w-full rounded-3xl shadow-inner"
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {activePlace && (
            <>
              {/* Mask luar */}
              <Polygon
                positions={[WORLD_BOUNDS, getPolygonFromBounds(activePlace.lat, activePlace.lng)]}
                pathOptions={{ fillColor: "#111827", fillOpacity: 0.3, stroke: false }}
              />

              {/* Batas kabupaten */}
              <Polygon
                positions={getPolygonFromBounds(activePlace.lat, activePlace.lng)}
                pathOptions={{
                  color: "#fbbf24",
                  weight: 3,
                  dashArray: "6,4",
                  fillOpacity: 0,
                }}
              />

              {/* Marker pusat kabupaten */}
              <Marker position={[activePlace.lat, activePlace.lng]} icon={activeIcon} />

              {/* Marker destinasi */}
              {placesInActiveRegion.map((place) => (
                <Marker
                  key={place.id}
                  position={[place.lat, place.lng]}
                  icon={placeIcon(place.image)}
                >
                  <Popup>
                    <div className="max-w-xs">
                      <h3 className="font-bold text-slate-900">{lang === "id" ? place.name.id : place.name.en}</h3>
                      <p className="text-sm text-slate-700 mt-1">{lang === "id" ? place.description.id : place.description.en}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </>
          )}
        </MapContainer>
      </div>
    </section>
  );
}
