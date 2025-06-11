import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Example images
const projects = [
  "https://cdn.prod.website-files.com/63c97522259e222504824584/6424683d76c085161883c44b_Practice%20Images-08-p-1600.jpg",
  "https://cdn.prod.website-files.com/63c97522259e222504824584/642468bd972f491297997849_Practice%20Images-44-min-p-1600.jpg",
  "https://cdn.prod.website-files.com/63c97522259e222504824584/642468b3f55004a15b0865f5_Practice%20Images-06-min-p-1600.jpg",
];

export default function ServicesSlides() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Responsive transform calculation
  // On mobile, images are 90vw wide + 8px gap
  // On desktop, images are max 600px wide + 8px gap
  // We'll use a CSS variable to handle this difference

  // Calculate the total slide distance in JS for mobile and desktop
  // We'll use a CSS variable for gap and width

  // For simplicity, keep the transform as before, but images will be responsive

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.04, 0.2],
    ["#ffffff", "#222222", "#000000"]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 52}%`]
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-[200vh] py-20 transition-colors duration-700"
      style={{ backgroundColor }}
    >
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center z-10 text-center mb-20 px-4">
        <h3 className="text-[36px] font-bold text-black">
          Our <span className="text-[#6366f1]">Practice</span>
        </h3>
        <p className="pt-2 w-full md:w-1/2 text-center text-black text-sm md:text-base">
          Our state-of-the-art practice is situated on the outskirts of Glasgow, where you will be warmly
          greeted by our friendly team and calming atmosphere.
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative w-full min-h-[200vh]">
        <div
          className="
            sticky top-0 h-screen flex items-center
            overflow-x-hidden
            md:overflow-visible
            w-screen
            md:w-full
          "
        >
          <motion.div
            className="flex h-auto gap-[8px] px-4 items-center"
            style={{ x }}
          >
            {projects.map((src, idx) => (
              <div
                key={idx}
                className="
                  flex-shrink-0
                  w-auto
                  h-auto
                  max-w-[600px]
                  md:max-w-[600px]
                  max-w-[90vw]
                "
              >
                <Link to="/projects">
                  <motion.img
                    src={src}
                    alt={`Practice Slide ${idx}`}
                    className="
                      object-cover rounded-md shadow-lg
                      h-[40vh] max-h-[75vw] w-auto
                      md:h-[75vh] md:max-w-[600px]
                      max-w-[90vw]
                    "
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Inline mobile-specific styles for safety */}
      <style>{`
        @media (max-width: 640px) {
          .sticky {
            overflow-x: hidden !important;
            width: 100vw !important;
            max-width: 100vw !important;
          }
          .max-w-\\[600px\\] {
            max-width: 90vw !important;
          }
          .h-\\[75vh\\] {
            height: 40vh !important;
            max-height: 75vw !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
