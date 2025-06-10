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
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 z-10 flex">
        <div className="flex-1 border-r border-gray-800"></div>
        <div className="flex-1 border-r border-gray-800"></div>
        <div className="flex-1 border-r border-gray-800"></div>
        <div className="flex-1"></div>
      </div>

      {/* Centered Text */}
      <div className="z-20 flex items-center text-4xl font-bold">
        {/* Left Side Text */}
        <h1 className="text-white mr-[90px]">Dental</h1>

        {/* Right Side Text */}
        <div className="relative w-[220px] h-[62px] overflow-hidden ml-[80px]">
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
