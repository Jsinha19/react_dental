/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// List of transformation images
const images = [
  "/upperParallax/1.jpg",
  "/upperParallax/2.jpg",
  "/upperParallax/3.jpg",
];

export default function ParallaxWithScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full min-h-[500vh] bg-[#f4f4f4] py-10">
      <div className="sticky top-0 h-screen py-2">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-6">
          {/* Left Static Content (Text + Button) */}
          <div className="sticky top-0 h-screen flex flex-col justify-start pt-16 z-10 text-left">
            <h2 className="text-5xl font-semibold text-gray-800 mb-6 leading-tight">
              Smile Makeovers that<br />change lives
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-md">
              We pride ourselves on delivering exceptionally high level of cosmetic dentistry to each patient that walks through our doors. Take a look at some of our smile transformations:
            </p>
            <button className="px-6 py-3 bg-[#5630d4] hover:bg-[#4226a6] text-white font-medium rounded transition duration-300 w-fit transform hover:-translate-y-1 cursor-pointer">
              Book Appointment
            </button>
          </div>

          {/* Right Parallax Scroll Image Stack */}
          <div className="relative h-screen">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              {images.map((src, index) => (
                <SlideImage
                  key={index}
                  index={index}
                  total={images.length}
                  scrollYProgress={scrollYProgress}
                  imageSrc={src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Animated Slide Image Component
function SlideImage({
  imageSrc,
  index,
  total,
  scrollYProgress,
}: {
  imageSrc: string;
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  if (index === 0) {
    // Sticky first image
    return (
      <div className="sticky top-0 h-screen z-0">
        <div className="w-[90%] h-[85%] mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl bg-white">
          <img
            src={imageSrc}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full rounded-2xl brightness-90"
          />
        </div>
      </div>
    );
  }

  // Parallax animated images
  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;
  const y = useTransform(scrollYProgress, [sectionStart, sectionEnd], ["100%", "0%"]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ y, zIndex: index }}
    >
      <div className="w-[90%] h-[85%] rounded-2xl overflow-hidden shadow-2xl bg-white">
        <img
          src={imageSrc}
          alt={`Slide ${index + 1}`}
          className="object-cover w-full h-full rounded-2xl brightness-90"
        />
      </div>
    </motion.div>
  );
}
