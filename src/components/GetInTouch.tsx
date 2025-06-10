import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GetInTouch() {
  const ref = useRef(null);

  // Marquee Scroll
  const marqueeRef = useRef(null);
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(marqueeScroll, [0, 1], ["0%", "-100%"]);

  // Title Scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const leftToCenter = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightToCenter = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* ✅ Marquee (top) */}
      <div ref={marqueeRef} className="w-full overflow-hidden bg-black py-2">
        <motion.div
          style={{ x: marqueeX }}
          className="flex whitespace-nowrap gap-8 text-[#6c63ff] text-[20px] font-light px-8"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {Array.from({ length: 10 }).flatMap((_, j) => (
                [
                  <span key={`l-${i}-${j}`}>Leaders</span>,
                  <span key={`e-${i}-${j}`}>Experts</span>,
                  <span key={`a-${i}-${j}`}>Artists</span>,
                ]
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Main Section */}
      <div
        ref={ref}
        className="flex flex-col items-center justify-center min-h-[80vh] pt-20 pb-28 px-4 text-center"
      >
        <motion.h2
          style={{ x: leftToCenter, opacity }}
          className="text-[48px] md:text-[56px] font-light mb-2"
        >
          Stay in touch
        </motion.h2>

        <motion.h2
          style={{ x: rightToCenter, opacity }}
          className="text-[48px] md:text-[56px] font-light text-[#6c63ff] mb-6"
        >
          Join our Community
        </motion.h2>

        <p className="text-gray-300 text-[17px] max-w-[700px] mb-6">
          Don't worry – we won't spam you with countless emails or texts.
          Stay in touch and receive VIP offers and first-access to our events!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
         <input
  type="email"
  placeholder="Enter your email"
  className="w-[280px] sm:w-[360px] h-[48px] px-4 rounded-[8px] font-light text-[16px] text-white bg-black border border-blue-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
/>

          <button className="bg-[#6c63ff] hover:bg-[#5b54e5] text-[16px] font-light text-white w-[120px] h-[48px] px-4 py-2 rounded-md cursor-pointer transition">
            Sign Up
          </button>
        </div>

        <p className="text-gray-500 text-[13px] max-w-[600px]">
          By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
