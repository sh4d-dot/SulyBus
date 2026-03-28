export default function Header(){

    return(<div className="bg-amber-500 w-full py-6 text-center relative z-20">
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
    );
}