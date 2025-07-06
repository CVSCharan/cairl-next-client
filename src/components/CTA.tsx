import React, { useState } from "react";
import { BackgroundGradient } from "./ui/bg-gradient";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingType, setLoadingType] = useState("");

  const handleButtonClick = (type: string) => {
    setLoadingType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[90vw] max-w-md rounded-3xl border-border bg-card/95 backdrop-blur-lg shadow-2xl mx-auto p-8">
          <DialogHeader className="pb-6 text-center">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
              {loadingType === "member" && "Become a Member"}
              {loadingType === "sponsor" && "Sponsor a Program"}
              {loadingType === "partnership" && "Start a Partnership"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base md:text-lg mt-2">
              We&apos;re excited to have you join us!
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center space-y-8 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full text-center space-y-6"
            >
              <div className="relative w-32 h-32 mx-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.9, 1.05, 0.9], opacity: 1 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.95, 1.1, 0.95], opacity: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-2 bg-primary/10 rounded-full blur-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-6xl"
                  >
                    ✨
                  </motion.span>
                </div>
              </div>

              <div className="space-y-4">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-primary"
                >
                  Stay Tuned!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl text-foreground leading-relaxed"
                >
                  We&apos;re preparing something awesome for you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-sm md:text-base text-muted-foreground"
                >
                  Coming soon...
                </motion.p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-primary/20"
            >
              Got it
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl w-full">
          <BackgroundGradient>
            <div
              className="section cta py-20 md:py-28 px-8 lg:px-12 relative overflow-hidden rounded-3xl my-1 mx-1"
              style={{
                background:
                  "linear-gradient(95.35deg, #000000 0.77%, #004A9F 50.41%, #071A37 99.86%), url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/swatch_gtmpsh.png')",
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Enhanced overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/60 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-5"></div>

              <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-lg"
                  >
                    Ready to Make an
                    <motion.span
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      className="text-primary block drop-shadow-lg"
                    >
                      Impact with CAiRL?
                    </motion.span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl lg:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
                  >
                    Explore how you can get involved as a student, researcher,
                    partner, or sponsor in our mission to advance AI for social
                    good.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6 w-full max-w-5xl mx-auto"
                  >
                    <button
                      onClick={() => handleButtonClick("member")}
                      className="flex-1 bg-primary text-primary-foreground font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-base md:text-lg border border-primary/20 backdrop-blur-sm group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Become a Member
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>

                    <button
                      onClick={() => handleButtonClick("sponsor")}
                      className="flex-1 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-base md:text-lg group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Sponsor a Program
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>

                    <button
                      onClick={() => handleButtonClick("partnership")}
                      className="flex-1 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-base md:text-lg group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Start a Partnership
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
};

export default CTA;
