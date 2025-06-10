import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const treatments = [
    "Invisalign®",
    "Composite Bonding",
    "Implants",
    "Orthodontics",
    "Tooth Whitening",
    "Facial Aesthetics",
    "Crowns & Veneers",
    "General Dentistry",
  ];

  return (
    <nav className="bg-black text-white px-16 py-4 flex items-center justify-between relative z-50">
      {/* Left: Logo + Navigation */}
      <div className="flex items-center gap-8">
        <img src={logo} alt="Millersneuk Dental" className="h-10" />

        <ul className="hidden md:flex items-center space-x-6 text-base font-medium">
          <li><a href="#" className="hover:text-[#6b63ff]">About</a></li>
          <li><a href="#" className="hover:text-[#6b63ff]">Pricing</a></li>
          <li><a href="#" className="hover:text-[#6b63ff]">Contact</a></li>
          <li><a href="#" className="hover:text-[#6b63ff]">Referrals</a></li>
          <li
            className="relative flex items-center gap-1 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="group-hover:text-[#6b63ff]">Treatments</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isHovered ? "rotate-180 text-[#6b63ff]" : ""}`}
            />

            {/* Dropdown */}
            {isHovered && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50"
              >
                <div className="flex flex-wrap justify-center gap-6 bg-black py-6 px-6 rounded-lg w-[90vw] max-w-7xl border border-white/10 shadow-lg">
                  {treatments.map((treatment, index) => (
                    <div
                      key={index}
                      className="relative w-[150px] h-[220px] rounded-xl overflow-hidden shadow-md border border-white/20 hover:border-blue-500 hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={`/treatments/${index + 1}.jpg`}
                        alt={treatment}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold z-10">
                        {treatment}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Right: Button */}
      <button
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transform hover:-translate-y-1 transition duration-300 cursor-pointer"
      >
        Book Appointment
      </button>
    </nav>
  );
}
