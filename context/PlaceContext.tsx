"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Regency } from "@/lib/regency";
import { REGENCY } from "@/lib/regency";
import { Place } from "@/lib/places";

type PlaceContextType = {
  activePlace: Regency; // selalu ada default
  setActivePlace: (place: Regency | Place) => void;
};

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);

export function PlaceProvider({ children }: { children: ReactNode }) {
  // nilai default diambil dari REGENCY[1] misal Lombok Tengah
  const [activePlace, setActivePlace] = useState<Regency | Place>(REGENCY[1]);

  return (
    <PlaceContext.Provider value={{ activePlace, setActivePlace }}>
      {children}
    </PlaceContext.Provider>
  );
}

export function usePlace() {
  const context = useContext(PlaceContext);
  if (!context) throw new Error("usePlace must be used within PlaceProvider");
  return context;
}
