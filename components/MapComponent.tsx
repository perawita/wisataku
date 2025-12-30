"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLang } from "./LanguageProvider";
import type { Place } from "@/lib/places";

// Marker icon
const icon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent({ places }: { places: Place[] }) {
  const { lang } = useLang();
  const center: LatLngExpression = [-8.65, 116.3];

  return (
    <div className="relative h-[70vh] w-full">
      <MapContainer
        center={center}
        zoom={9}
        className="h-full w-full rounded-3xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={icon}
          >
            <Popup>
              <div className="w-64 overflow-hidden rounded-xl">
                <img
                  src={place.image}
                  alt={place.name[lang]}
                  className="h-28 w-full object-cover"
                />

                <div className="p-3">
                  <h3 className="text-sm font-semibold">
                    {place.name[lang]}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-500">
                    {place.location}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-700">
                    {place.description[lang]}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
