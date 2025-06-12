import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <nav className="bg-black text-white px-6 md:px-16 py-4 flex items-center justify-start relative z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Millersneuk Dental" className="h-10" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center space-x-6 text-base font-medium ml-8">
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
          {isHovered && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50"
            >
              <div className="flex flex-wrap justify-center gap-6 bg-black py-6 px-6 rounded-lg w-[90vw] max-w-7xl border border-white/10 shadow-lg">
                {treatments.map((treatment, index) => (
                  <div
                    key={index}
                    className="relative w-[150px] h-[220px] rounded-xl overflow-hidden shadow-md border border-white/20 hover:border-[#6b63ff] hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={`/treatments/${index + 1}.jpg`}
                      alt={treatment}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log("Image failed:", `/treatments/${index + 1}.jpg`);
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/150x220/CCCCCC/000000?text=Missing`;
                      }}
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

      {/* Right: Book Button + Hamburger */}
      <div className="flex items-center md:gap-4 ml-auto"> {/* Back to ml-auto to push right */}
        <button className="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transform hover:-translate-y-1 transition duration-300 cursor-pointer">
          Book Appointment
        </button>
        <button
          className="md:hidden text-white ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 z-40 py-6">
          <ul className="flex flex-col space-y-4 px-6 text-base font-medium">
            <li><a href="#" className="hover:text-[#6b63ff]">About</a></li>
            <li><a href="#" className="hover:text-[#6b63ff]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#6b63ff]">Contact</a></li>
            <li><a href="#" className="hover:text-[#6b63ff]">Referrals</a></li>
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-[#6b63ff]">
                  Treatments
                  <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 space-y-2 pl-4 text-sm">
                  {treatments.map((treatment, index) => (
                    <a key={index} href="#" className="block hover:text-[#6b63ff]">
                      {treatment}
                    </a>
                  ))}
                </div>
              </details>
            </li>
            <li>
              <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition duration-300">
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
