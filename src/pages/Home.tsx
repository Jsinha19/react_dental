import { useRef } from "react";
import HomeParallax from "../components/HomeParallax";
import OurTreatmentsSlider from "../components/OurTreatmentsSlider"


import { motion, useScroll, useTransform } from "framer-motion";
import UpperParallax from "../components/UpperParallax.";
import Testimonials from "../components/Testimonials";
import OurPractice from "../components/OurPractice";
import OurTeamSection from "../components/OurTeamSection";




const texts = [
  <>
    <span className="text-[#6d58b3]">Leaders </span><span className="text-black">in cosmetic <br />dentistry</span>
    <br />
  </>,

  <>
    <span className="text-[#6d58b3]">State</span><span className="text-black">of art the art <br />in mordern clinic</span>
    <br />
  </>,
  <>
    <span className="text-[#6d58b3]">Redefining standards</span><span className="text-black">in <br />patients care</span>
    <br />
  </>,

];

export default function Home() {
  return (
    <div className="relative w-full">
      <HomeParallax />
      <TextAnimation />
      <OurTreatmentsSlider />
      <UpperParallax />
      <Testimonials />
      <OurPractice />
      <OurTeamSection />


    </div>
  );
}

function TextAnimation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div ref={containerRef} className="min-h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white">
        <div className="relative w-full h-full">
          {texts.map((textKey, index) => (
            <TextBlock
              key={index}
              textKey={textKey}
              index={index}
              total={texts.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface TextBlockProps {
  textKey?: any;
  index: number;
  total: number;
  scrollYProgress: any;
}

function TextBlock({ textKey, index, total, scrollYProgress }: TextBlockProps) {
  const sectionStart = index / total;
  const sectionMid = sectionStart + 1 / total / 2;
  const sectionEnd = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [sectionStart, sectionMid, sectionEnd],
    [0, 1, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-center"
      style={{ opacity, zIndex: total - index, transform: "translateY(-80px)" }}

    >
      <h4 className="text-2xl md:text-6xl font-bold tracking-wide leading-tight ">
        {textKey}
      </h4>
    </motion.div>
  );
}
