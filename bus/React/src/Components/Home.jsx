// Home.jsx
import { useState } from "react";
import Map from "./Map";
import Slider from "./Slider";

export default function Home() {
  const [enableLocation, setEnableLocation] = useState(false);

  return (
    <Slider>
      {({ openSlider }) => (
        <>
     {/* Header with menu button on the RIGHT */}
<div className="bg-amber-500 w-full py-6 text-center relative z-20">
      {/* Button on the right side of the header */}
      <button
        onClick={openSlider}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:hidden"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
      </button>
      <h1 className="headerTitle">SulyBus Stop</h1>
    </div>

          {/* Map pushed ALL the way back, no extra divs */}
          <div className="absolute inset-0 z-0">
            <Map enableLocation={enableLocation} />
          </div>

          {/* Enable modal (on top, not behind) */}
          {!enableLocation && (
            <div className="absolute top-30 left-1/2 -translate-x-1/2 z-40 bg-amber-400 p-6 rounded-2xl text-center w-[320px] shadow-lg">
              <h1 className="text-2xl font-bold">SulyBus</h1>
              <p className="mt-1">
                The first digital bus system in Kurdistan
              </p>
              <button
                onClick={() => setEnableLocation(true)}
                className="btn"
              >
                Enable Location
              </button>
              <p className="mt-3">
                We use your location only to show nearby bus stops.
              </p>
            </div>
          )}
        </>
      )}
    </Slider>
  );
}
