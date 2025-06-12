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
      className="relative w-full min-h-[300vh] sm:min-h-[220vh] bg-[#f4f4f4] pt-2 pb-0"
    >
      <div className="sticky top-0 h-screen">
        <div
          className={`container mx-auto flex ${
            isMobile ? "flex-col-reverse" : "md:grid md:grid-cols-2"
          } items-center h-full px-2 sm:px-4`}
        >
          {/* Left Content */}
          <div
            className={`flex flex-col justify-start z-10 ${
              isMobile
                ? "relative h-auto pr-0 py-6"
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

          {/* Right Parallax */}
          <div className="relative h-screen flex items-center justify-center w-full">
          <div className={`sticky top-0 h-screen w-full relative overflow-hidden ${isMobile ? "mt-50" : ""}`}>

              {images.map((src, index) => (
                <SlideImage
                  key={index}
                  imageSrc={src}
                  index={index}
                  total={images.length}
                  scrollYProgress={scrollYProgress}
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

  const rawY = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    ["100%", "0%"],
    { clamp: false }
  );

  const y = useTransform(rawY, (value) => {
    const val = parseFloat(value);
    return val >= 0 ? "0%" : value;
  });

  const imgWrapperClasses = isMobile
    ? "w-full max-w-full h-[60vh] mx-auto rounded-xl overflow-hidden shadow-xl bg-white"
    : "w-full max-w-[98vw] sm:max-w-[900px] h-[76vh] sm:h-[90vh] mx-auto rounded-xl overflow-hidden shadow-xl bg-white";

  if (index === 0) {
    const firstImageY = useTransform(
      scrollYProgress,
      [0, 1 / total],
      ["0%", "-100%"],
      { clamp: false }
    );

    return (
      <motion.div
        className="sticky top-0 h-screen z-0 flex items-center justify-center w-full px-2 sm:px-4"
        style={{ y: firstImageY, zIndex: total - index }}
      >
        <div className={imgWrapperClasses}>
          <img
            src={imageSrc}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain rounded-xl"
            style={{ display: "block" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://placehold.co/400x600/CCCCCC/000000?text=Image+${index + 1}`;
            }}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center w-full px-2 sm:px-4"
      style={{ y, zIndex: total - index }}
    >
      <div className={imgWrapperClasses}>
        <img
          src={imageSrc}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-contain rounded-xl"
          style={{ display: "block" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/400x600/CCCCCC/000000?text=Image+${index + 1}`;
          }}
        />
      </div>
    </motion.div>
  );
}
