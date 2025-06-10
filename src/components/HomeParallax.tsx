import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ParallaxImageProps {
  scrollYProgress: any;
}

export default function HomeParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/about");

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-black">
      {/* Hero Section */}
      <motion.div className="sticky top-0 h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-12 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 leading-tight"
        >
          <span className="block bg-gradient-to-b from-[#7065f0] via-[#8f88ff] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent text-[42px] md:text-[54px] font-semibold">
            Award-Winning Dental
          </span>
          <span className="block bg-gradient-to-b from-[#7065f0] via-[#8f88ff] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent text-[42px] md:text-[54px] font-semibold">
            Practice in Glasgow
          </span>
        </motion.h1>

        <p className="text-white/90 text-[16px] md:text-[18px] font-light mb-6 max-w-2xl">
          Our philosophy is built on providing the world’s best cosmetic dental care, uniquely tailored to the individual.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-[15px] font-medium text-white bg-[#6a5cff] rounded-md shadow-md"
            onClick={() => window.location.href = "#book"}
          >
            Book Appointment
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigate}
            className="px-6 py-3 border text-[15px] font-medium border-[#6a5cff] text-white rounded-md hover:bg-[#6a5cff]/20 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Parallax Video */}
      <div className="sticky top-0 h-screen -mt-[3rem] z-0">
        <ParallaxImage scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function ParallaxImage({ scrollYProgress }: ParallaxImageProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.26]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-40"
      style={{ scale }}
    >
      <motion.video
        src="dentist.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-[82vw] h-[80vh] object-cover rounded-3xl"
        style={{
          boxShadow:
            "0 0 300px 180px rgba(106, 92, 255, 0.35), 0 0 480px 240px rgba(191, 240, 255, 0.15)",
          filter: "blur(0.3px)",
        }}
      />
    </motion.div>
  );
}
