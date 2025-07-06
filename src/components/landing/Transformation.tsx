import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Transformation: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl w-full">
        <div className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          {/* Enhanced Background Image with Better Overlay */}
          <div className="absolute inset-0 z-0 mx-auto max-w-7xl rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Multi-layer overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/70 rounded-xl sm:rounded-2xl z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 rounded-xl sm:rounded-2xl z-[11]" />

            <Image
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176571/landing_img_2_a1n9no.png"
              alt="AI technology background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </div>

          {/* Enhanced Content with Better Text Readability */}
          <div className="container mx-auto relative z-[12] py-8 sm:py-10 md:py-12 lg:py-16 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Text container with subtle backdrop */}
              <div className="relative">
                {/* Subtle text backdrop for enhanced readability */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl blur-xl scale-110 -z-10" />

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl"
                  style={{
                    textShadow: `
                      0 0 20px rgba(0, 0, 0, 0.8),
                      2px 2px 4px rgba(0, 0, 0, 0.9),
                      0 0 40px rgba(0, 0, 0, 0.5)
                    `,
                  }}
                >
                  Driving Responsible{" "}
                  <span
                    className="text-[#85D1F1] font-extrabold"
                    style={{
                      textShadow: `
                        0 0 20px rgba(133, 209, 241, 0.6),
                        2px 2px 4px rgba(0, 0, 0, 0.9),
                        0 0 40px rgba(133, 209, 241, 0.3)
                      `,
                    }}
                  >
                    AI
                  </span>
                  <span className="block sm:inline"> Transformation</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-6 md:mb-8 mx-auto max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl leading-relaxed font-medium"
                  style={{
                    textShadow: `
                      1px 1px 3px rgba(0, 0, 0, 0.8),
                      0 0 15px rgba(0, 0, 0, 0.6)
                    `,
                  }}
                >
                  Our research focuses on developing AI technologies that are
                  ethical, transparent, and beneficial to society. We work with
                  partners across industries to implement responsible AI
                  solutions that drive meaningful change.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="cta-container inline-block"
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-[#85D1F1] to-[#60C3E8] text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-8 md:px-10 lg:py-4 lg:px-12 rounded-full hover:from-[#60C3E8] hover:to-[#85D1F1] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base md:text-lg font-bold tracking-wide border-2 border-transparent hover:border-white/20 backdrop-blur-sm"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span className="relative z-10">Explore Services</span>
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements for Enhanced Visual Appeal */}
          <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#85D1F1]/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#85D1F1]/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Transformation;
