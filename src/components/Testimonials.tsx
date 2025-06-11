import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LiaStarSolid } from "react-icons/lia";

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non justo ut enim tincidunt tincidunt.",
      author: "John Smith",
    },
    {
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      author: "Emily Johnson",
    },
    {
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      author: "Michael Brown",
    },
    {
      text: "Suspendisse potenti. Praesent feugiat ligula at ligula facilisis, sed tincidunt justo fermentum.",
      author: "Sophia Davis",
    },
    {
      text: "Ut viverra, leo nec malesuada dictum, turpis purus consectetur justo, vitae consequat magna elit a nulla.",
      author: "David Wilson",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black/80 pb-10 md:min-h-[200vh] min-h-[120vh]"
    >
      <div className="container mx-auto md:sticky md:top-0 h-auto md:h-screen overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-x-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center md:sticky md:top-0 h-auto md:h-screen text-left px-6 md:pr-24 md:pl-10 py-12 md:py-0">
            <h3 className="mb-6 text-white text-[32px] md:text-[42px] font-bold leading-tight">
              Patient <span className="text-[#6366f1]">Testimonials</span>
            </h3>
            <p className="text-white/80 mb-8 max-w-xl">
              We've built a reputation on going the extra mile for our patients. For us, it's always about you and treating every patient individually.
            </p>
            <button className="bg-white text-black font-medium rounded-lg px-6 py-3 w-fit transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              Book Appointment
            </button>
          </div>

          {/* Right Section with Cards */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-screen mt-10 md:mt-0">
            <div className="md:sticky md:top-0 h-full w-full overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  total={testimonials.length}
                  scrollYProgress={scrollYProgress}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  total,
  scrollYProgress,
  isFirst,
}: {
  testimonial: { text: string; author: string };
  index: number;
  total: number;
  scrollYProgress: any;
  isFirst: boolean;
}) {
  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;
  const y = useTransform(scrollYProgress, [sectionStart, sectionStart + 0.1], ["120%", "0%"]);

  const cardSpacing = 40;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        top: `${index * cardSpacing}px`,
        y: isFirst ? "0%" : y,
        zIndex: index,
      }}
    >
      <div className="w-full max-w-[90%] h-[320px] mx-auto bg-[#0f172a] border-2 border-[#6366f1] rounded-2xl shadow-xl p-6 text-white text-left">
        <div className="flex mb-4 justify-start">
          {[...Array(5)].map((_, i) => (
            <LiaStarSolid key={i} className="text-[#6366f1] size-5" />
          ))}
        </div>
        <p className="text-white mb-4 leading-relaxed">{testimonial.text}</p>
        <p className="text-primary">— {testimonial.author}</p>
      </div>
    </motion.div>
  );
}
