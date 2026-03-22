// Components/Slider.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Slider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children({ openSlider: () => setIsOpen(true) })}

      {/* Right‑sider slider */}
      <aside
        className={`fixed top-0 right-0 h-full bg-orange-600 text-white z-50
          w-64 md:w-16 transition-transform duration-300 transform
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
      >

{/* Bus logo (no circle) + Menu text above */}
{/* Menu text + bus with very low‑brightness bg */}
<div className="p-6 flex flex-col items-center gap-3">
  <span className="text-xs tracking-widest font-semibold text-orange-200 uppercase">
    Menu
  </span>
  <div className="w-26 h-26 rounded-full bg-yellow-500 flex items-center justify-center drop-shadow-sm">
    <span className="text-6xl text-white">
      🚌
    </span>
  </div>
</div>



        {/* Menu links */}
        <ul className="mt-4 px-2">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 md:py-2 hover:bg-orange-500 rounded-lg"
            >
              <span className="w-6 h-6 flex items-center justify-center">🏠</span>
              <span className="ml-3 md:hidden">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 md:py-2 hover:bg-orange-500 rounded-lg"
            >
              <span className="w-6 h-6 flex items-center justify-center">👤</span>
              <span className="ml-3 md:hidden">Account</span>
            </Link>
          </li>
          <li>
            <Link
              to="/subscription"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 md:py-2 hover:bg-orange-500 rounded-lg"
            >
              <span className="w-6 h-6 flex items-center justify-center">💳</span>
              <span className="ml-3 md:hidden">Subscription</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 md:py-2 hover:bg-orange-500 rounded-lg"
            >
              <span className="w-6 h-6 flex items-center justify-center">ℹ️</span>
              <span className="ml-3 md:hidden">About</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay (click outside to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}
