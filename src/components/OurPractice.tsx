import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

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

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.04, 0.2],
    ["#ffffff", "#222222", "#000000"]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 52}%`] // adjust based on image + gap width
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
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            className="flex h-auto gap-[8px] px-4 items-center"
            style={{ x }}
          >
            {projects.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-auto h-auto max-w-[600px]" // Keeps natural size, caps max width
              >
                <Link to="/projects">
                  <motion.img
                    src={src}
                    alt={`Practice Slide ${idx}`}
                    className="h-[75vh] w-auto object-cover rounded-md shadow-lg"
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
