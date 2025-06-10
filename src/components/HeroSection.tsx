import React from "react";

const HeroSection = () => {
    return (
        <section className="relative bg-black text-white min-h-[80vh] flex items-start justify-center px-4 overflow-hidden pt-24">
            <div className="text-center max-w-3xl z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-[#b2a4ff] leading-tight">
                    Award-Winning Dental <br /> Practice in Glasgow
                </h1>
                <p className="mt-4 text-sm md:text-lg text-gray-300">
                    Our philosophy is built on providing the world's best cosmetic dental care,
                    uniquely tailored to the individual.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="bg-[#6c63ff] hover:bg-[#5848f5] text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        Book Appointment
                    </button>
                    <button
                        className="border border-[#6c63ff] text-[#d0d0d0] hover:bg-[#1e1b3a] px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Gradient background below content */}
            <div className="absolute top-[60%] left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-[#1c0f45] z-0" />
        </section>
    );
};

export default HeroSection;
