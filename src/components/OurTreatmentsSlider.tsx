import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const slides = [
  {
    category: "Invisalign®",
    description: "Invisalign will straighten your teeth without the need for wires or brackets",
    src: "/treatments/1.jpg",
  },
  {
    category: "Implants",
    description: "Replace missing teeth with dental implants",
    src: "/treatments/3.jpg",
  },
  {
    category: "Orthodontics",
    description: "NHS and adult orthodontics",
    src: "/treatments/4.jpg",
  },
  {
    category: "Tooth Whitening",
    description: "Stained teeth? It's time to whiten your smile",
    src: "/treatments/5.jpg",
  },
  {
    category: "Facial Aesthetics",
    description: "Anti-wrinkle injections, lip fillers and more",
    src: "/treatments/6.jpg",
  },
  {
    category: "Crowns & Veneers",
    description: "Custom porcelain pieces cemented over teeth",
    src: "/treatments/7.jpg",
  },
];

export default function OurTreatmentsSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const getPosition = (index: number) => {
    const diff = (index - current + slides.length) % slides.length;
    if (diff === 0) return 0; // center
    if (diff === 1) return 1;
    if (diff === 2) return 2;
    if (diff === slides.length - 1) return -1;
    if (diff === slides.length - 2) return -2;
    return null;
  };

  return (
    <div className="min-h-[115vh] bg-black flex items-center justify-center px-6 md:px-20 overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col justify-between h-full py-16">
          <div className="space-y-4">
            <h4 className="text-[#5d5bd4] text-lg font-normal tracking-wide">Our Treatments</h4>
            <h2 className="text-white text-[3.4rem] font-light leading-tight">
              {slides[current].category}
            </h2>
            <p className="text-white/90 text-lg font-light">
              {slides[current].description}
            </p>
          </div>
          <div className="flex space-x-6 pt-10">
            <button
              onClick={prevSlide}
              className="px-8 py-3 rounded-full bg-[#251f5f] border border-[#5d5bd4] text-[#5d5bd4] hover:scale-105 transition-all duration-300"
            >
              <MdKeyboardArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="px-8 py-3 rounded-full bg-[#251f5f] border border-[#5d5bd4] text-[#5d5bd4] hover:scale-105 transition-all duration-300"
            >
              <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Image Stack */}
        <div className="relative w-full max-w-md h-[520px] mx-auto">
          {slides.map((slide, index) => {
            const pos = getPosition(index);
            if (pos === null) return null;

            const zIndex = 10 - Math.abs(pos);
            const offsetX = `${pos * 10}%`;
            const scale = pos === 0 ? 1 : 0.9 - Math.abs(pos) * 0.03;
            const opacity = pos === 0 ? 1 : 0.15 + 0.2 * (2 - Math.abs(pos));
            const rotate = pos * 3;

            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                style={{ zIndex }}
                initial={false}
                animate={{ x: offsetX, scale, opacity, rotate }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <img
                  src={slide.src}
                  alt={slide.category}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
