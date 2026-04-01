import { useState } from "react";
import Map from "./Map";
import Slider from "./Slider";

export default function Home() {
  const [enableLocation, setEnableLocation] = useState(false);

  return (
    <div className="h-screen flex flex-col relative">
      {/* Header */}
      <div className="bg-amber-500 py-6 text-center relative z-20">
        <h1 className="headerTitle">SulyBus Stop</h1>

        {/* Slider button */}
        <Slider>
          {({ openSlider }) => (
            <button
              onClick={openSlider}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:hidden z-30"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </div>
            </button>
          )}
        </Slider>
      </div>

      {/* Map fills remaining space */}
      <div className="flex-1 relative z-10">
        <Map enableLocation={enableLocation} />
      </div>

      {/* Enable Location Modal */}
      {!enableLocation && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-40 bg-amber-400 p-6 rounded-2xl text-center w-[320px] shadow-lg">
          <h1 className="text-2xl font-bold">SulyBus</h1>
          <p className="mt-1">The first digital bus system in Kurdistan</p>
          <button onClick={() => setEnableLocation(true)} className="btn mt-3">
            Enable Location
          </button>
          <p className="mt-3">
            We use your location only to show nearby bus stops.
          </p>
        </div>
      )}
    </div>
  );
}