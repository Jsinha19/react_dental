import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Book() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-20%", // Trigger animation when 20% of the element is visible
    });

    return (
        // Main container: Adjusted min-height for better mobile responsiveness.
        // It will take at least 60% of the viewport height on small screens,
        // increasing for sm and md, and then fixed at 80vh for larger screens.
        <motion.div
            ref={ref}
            className="bg-slate-100 min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full flex justify-center items-center px-4" // Added horizontal padding
        >
            {/* Inner card: Adjusted height for responsiveness.
                Width (90vw) is already responsive, which is good. */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 1.5,
                    ease: [0.25, 0.8, 0.25, 1],
                }}
                // Responsive height: h-[40vh] on mobile, then larger for sm/md, and finally fixed 300px on lg.
                className="relative h-[40vh] sm:h-[50vh] md:h-[280px] lg:h-[300px] w-[90vw] max-w-4xl rounded-2xl overflow-hidden" // max-w-4xl prevents it from becoming too wide on very large screens
                style={{
                    boxShadow: `
                        0 10px 30px rgba(108, 99, 255, 0.4),
                        -10px 0 30px rgba(108, 99, 255, 0.3),
                        10px 0 30px rgba(108, 99, 255, 0.3)
                    `,
                    backgroundColor: "black",
                }}
            >
                {/* Image: Stays responsive with w-full h-full object-cover */}
                <motion.img
                    src="/appointment/a.jpg" // Ensure this image path is correct
                    alt="Dental team"
                    className="w-full h-full object-cover transform rounded-2xl border-[3px] border-[#3229ea]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                    loading="eager"
                    // Fallback for image loading errors
                    onError={(e) => {
                        e.currentTarget.onerror = null; // Prevent infinite loop
                        e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Unavailable";
                    }}
                />

                {/* Overlay with text and button: Adjusted font sizes for responsiveness */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl
                               bg-gradient-to-t from-black/80 via-black/60 to-black/20 text-white p-4 sm:p-6 md:p-8 z-10 text-center" // Responsive padding
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                >
                    {/* Responsive Heading: Scales from text-3xl on mobile to text-5xl on medium, and then fixed large on larger screens. */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold mb-2 sm:mb-4">Book an appointment today</h3>
                    {/* Responsive Paragraph: Scales from text-sm on mobile to text-base, and then fixed large on larger screens. */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-white mb-4 sm:mb-6">
                        Start your smile journey at Millersneuk Dental Practice, Lenzie.
                    </p>
                    <button className="bg-[#6c63ff] hover:bg-[#5b54e5] transition px-6 py-3 rounded-lg text-white font-medium shadow-md text-sm sm:text-base"> {/* Responsive button text size */}
                        Book Appointment
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}