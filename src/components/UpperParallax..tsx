import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isMobile ? "min-h-[220vh]" : "min-h-[300vh]"
      } bg-[#f4f4f4] ${isMobile ? "pt-2 pb-0" : "pt-6 pb-0"}`}
      // Removed extra padding-bottom, minimized padding-top
    >
      <div className="sticky top-0 h-screen">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-2 sm:px-4">
          {/* Left Content - Minimal top padding */}
          <div
            className={`flex flex-col justify-start ${
              isMobile ? "pt-2" : "pt-6"
            } z-10 text-left ${
              isMobile
                ? "static h-auto pr-0"
                : "md:sticky md:top-0 md:h-screen md:pr-6"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight text-center md:text-left">
              Smile Makeovers that
              <br className="hidden md:block" /> change lives
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto md:mx-0 text-center md:text-left">
              We pride ourselves on delivering an exceptionally high level of cosmetic dentistry to each patient that walks through our doors.
            </p>
            <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#5630d4] hover:bg-[#4226a6] text-white font-medium rounded transition duration-300 w-fit transform hover:-translate-y-1 cursor-pointer mx-auto md:mx-0 text-sm sm:text-base">
              Book Appointment
            </button>
          </div>

          {/* Right Parallax - Aggressive upward shift */}
          <div className="relative h-screen flex items-center justify-center -mt-8 md:mt-0" style={isMobile ? { transform: "translateY(-32px)" } : {}}>
            <div className="sticky top-0 h-screen w-full overflow-visible">
              {images.map((src, index) => (
                <SlideImage
                  key={index}
                  index={index}
                  total={images.length}
                  scrollYProgress={scrollYProgress}
                  imageSrc={src}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideImage({
  imageSrc,
  index,
  total,
  scrollYProgress,
  isMobile,
}: {
  imageSrc: string;
  index: number;
  total: number;
  scrollYProgress: any;
  isMobile: boolean;
}) {
  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;
  const y = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    isMobile ? ["40%", "0%"] : ["80%", "0%"]
  );

  const imgWrapperClasses = isMobile
    ? "w-[92%] h-[50vh] rounded-xl"
    : "w-[85%] h-[70%] rounded-2xl";

  if (index === 0) {
    return (
      <div className="sticky top-0 h-screen z-0 flex items-center justify-center">
        <div className={`${imgWrapperClasses} overflow-hidden shadow-xl bg-white`}>
          <img
            src={imageSrc}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full rounded-xl brightness-90"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://placehold.co/400x600/CCCCCC/000000?text=Image+${index + 1}`;
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ y, zIndex: index }}
    >
      <div className={`${imgWrapperClasses} overflow-hidden shadow-xl bg-white`}>
        <img
          src={imageSrc}
          alt={`Slide ${index + 1}`}
          className="object-cover w-full h-full rounded-xl brightness-90"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/400x600/CCCCCC/000000?text=Image+${index + 1}`;
          }}
        />
      </div>
    </motion.div>
  );
}
