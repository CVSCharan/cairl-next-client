import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Vision: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative flex items-center justify-center min-h-screen w-full bg-background overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Enhanced Background Lamp Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem] md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem] xl:h-[36rem] xl:w-[36rem] -translate-x-1/2 -translate-y-1/2">
          {/* Multiple glow layers for better effect */}
          <div
            className="absolute h-full w-full rounded-full bg-[#85D1F1]/20 blur-3xl animate-pulse"
            style={{ transform: "scale(1.8)", animationDuration: "4s" }}
          />
          <div
            className="absolute h-full w-full rounded-full bg-[#85D1F1]/15 blur-2xl animate-pulse"
            style={{
              transform: "scale(1.4)",
              animationDuration: "3s",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute h-full w-full rounded-full bg-[#85D1F1]/10 blur-xl"
            style={{ transform: "scale(1.2)" }}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(133, 209, 241, 0.25) 0%, rgba(133, 209, 241, 0.05) 40%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Enhanced Content with Better Text Readability */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Text container with subtle backdrop */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle text backdrop for enhanced readability */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-3xl scale-110 -z-10" />

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-[#85D1F1]/20 to-[#60C3E8]/20 text-[#85D1F1] text-xs sm:text-sm md:text-base font-semibold mb-4 sm:mb-6 md:mb-8 shadow-lg border border-[#85D1F1]/30 backdrop-blur-sm"
            style={{
              textShadow: "0 0 10px rgba(133, 209, 241, 0.3)",
            }}
          >
            Our Vision
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight drop-shadow-sm"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            A World Empowered by{" "}
            <span
              className="text-[#85D1F1] font-extrabold bg-gradient-to-r from-[#85D1F1] to-[#60C3E8] bg-clip-text text-transparent"
              style={{
                textShadow: "none", // Remove text shadow for gradient text
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/90 mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed"
            style={{
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            Our vision is to create a future where AI is seamlessly integrated
            into every aspect of life, improving human welfare, enabling
            sustainable development, and empowering communities around the
            world. At CAiRL, we aim to be a leader in the global AI ecosystem,
            driving responsible AI innovation that benefits humanity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
          >
            <Link
              href="/about-us"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#85D1F1] to-[#60C3E8] text-white hover:from-[#60C3E8] hover:to-[#85D1F1] px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl shadow-lg border-2 border-transparent hover:border-white/20 backdrop-blur-sm overflow-hidden"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#85D1F1] to-[#60C3E8] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />

              <span className="relative z-10 flex items-center">
                Know More
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
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-[#85D1F1]/30 rounded-full blur-sm animate-pulse" />
      <div
        className="absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#85D1F1]/40 rounded-full blur-sm animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-16 left-16 w-2 h-2 sm:w-3 sm:h-3 bg-[#85D1F1]/50 rounded-full blur-sm animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-5 h-5 sm:w-7 sm:h-7 bg-[#85D1F1]/25 rounded-full blur-sm animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </section>
  );
};

export default Vision;
