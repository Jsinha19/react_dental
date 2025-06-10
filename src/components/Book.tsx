import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function Book() {
   
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-20%",
    });

    return (
        <motion.div
            ref={ref}
            className="bg-slate-100 h-[80vh] w-full flex justify-center items-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 1.5,
                    ease: [0.25, 0.8, 0.25, 1],
                }}
                className="relative h-[300px] w-[90vw] rounded-2xl overflow-hidden"
                style={{
                    boxShadow: `
                        0 10px 30px rgba(108, 99, 255, 0.4),
                        -10px 0 30px rgba(108, 99, 255, 0.3),
                        10px 0 30px rgba(108, 99, 255, 0.3)
                    `,
                    backgroundColor: "black",
                }}
            >
                {/* Image with blue border */}
                <motion.img
                    src="/appointment/a.jpg"
                    alt="Dental team"
                    className="w-full h-full object-cover transform rounded-2xl border-[3px] border-[#3229ea]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                    loading="eager"
                />

                {/* Overlay with text and button */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl 
                               bg-gradient-to-t from-black/80 via-black/60 to-black/20 text-white p-4 z-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                >
                    <h3 className="text-[56px] font-semibold mb-4">Book an appointment today</h3>
                    <p className="text-[18px] text-white mb-6">
                        Start your smile journey at Millersneuk Dental Practice, Lenzie.
                    </p>
                    <button className="bg-[#6c63ff] hover:bg-[#5b54e5] transition px-6 py-3 rounded-lg text-white font-medium shadow-md">
                        Book Appointment
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
