import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = ["Artists", "Experts", "Leaders", "Visionaries"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center p-4"> {/* Keep padding for edges */}
      {/* Vertical Grid Lines - Adjusted for responsiveness */}
      <div className="absolute inset-0 z-10 grid grid-cols-2 md:grid-cols-4">
        <div className="border-r border-gray-800"></div>
        <div className="border-r border-gray-800"></div>
        <div className="hidden md:block border-r border-gray-800"></div> {/* Hide on small screens */}
        <div className="hidden md:block"></div> {/* Hide on small screens */}
      </div>

      {/* Centered Split Text */}
      {/* IMP: Changed from 'flex-col sm:flex-row' to just 'flex-row' and added 'text-left' to ensure horizontal layout on all screens */}
      <div className="z-20 flex flex-row w-full max-w-screen-xl text-left text-xl sm:text-3xl md:text-5xl font-semibold">
        {/* Left Half - Right Aligned Dental */}
        {/* IMP: Removed 'justify-center' and ensured 'justify-end' for consistent right alignment */}
        <div className="w-1/2 flex justify-end pr-1 sm:pr-4"> {/* Reduced pr on small screens */}
          <h1 className="text-white">Dental</h1>
        </div>

        {/* Right Half - Left Aligned Animated Text */}
        {/* IMP: Removed 'justify-center' and ensured 'justify-start' for consistent left alignment */}
        <div className="w-1/2 flex justify-start pl-1 sm:pl-4 relative h-[1.2em] overflow-hidden"> {/* Reduced pl on small screens */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full text-indigo-400"
            >
              {loadingTexts[currentText]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}