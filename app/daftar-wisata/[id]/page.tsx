import { notFound } from "next/navigation";
import { PLACES } from "@/lib/places";
import { PlaceProvider } from "@/context/PlaceContext";
import Content from "../partials/DetailWisataClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function DetailWisataPage({ params }: PageProps) {
  const { id } = await params; // ✅ WAJIB

  const place = PLACES.find((p) => p.id === Number(id));

  if (!place) return notFound();

  return (
    <PlaceProvider>
        <Content place={place} />
    </PlaceProvider>
  );
}