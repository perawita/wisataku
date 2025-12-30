import { PLACES } from "@/lib/places";
import { FeaturedPlace } from "./partials/FeaturedPlace";
import { DetailPlace } from "./partials/DetailPlace";
import { PlaceProvider } from "@/context/PlaceContext";
import FinalCTA from "./partials/FinalCTA";
import WaButton from "@/components/WaButton";

export default function MapPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <PlaceProvider>
        <FeaturedPlace />
        <DetailPlace />
        <FinalCTA />
      </PlaceProvider>
    </div>
  );
}
