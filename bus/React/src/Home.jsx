import { useState } from "react";
import Map from "./Map";

export default function Home() {
  const [enableLocation, setEnableLocation] = useState(false);

  return (
    <div className="relative  h-screen w-full">
      
      <Map enableLocation={enableLocation} />

      
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-1000 bg-amber-400 p-6 rounded-2xl text-center w-[320px] shadow-lg">
        <h1 className="text-2xl font-bold">SulyBus</h1>
        <p className=" mt-1">
          The first digital bus system in Kurdistan
        </p>

        {!enableLocation && (
          <button
            onClick={() => setEnableLocation(true)}
            className="btn"
          >
            Enable Location
          </button>
        )}

        <p className=" mt-3">
          We use your location only to show nearby bus stops.
        </p>
      </div>
    </div>
  );
}
