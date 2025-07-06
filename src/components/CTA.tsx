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
        <DialogContent className="w-[90vw] max-w-md rounded-2xl border-border bg-card shadow-2xl mx-auto p-8">
          <DialogHeader className="pb-4 text-center">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {loadingType === "member" && "Become a Member"}
              {loadingType === "sponsor" && "Sponsor a Program"}
              {loadingType === "partnership" && "Start a Partnership"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              We&apos;re excited to have you join us!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full text-center space-y-6"
            >
              <div className="relative w-28 h-28 mx-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.9, 1.05, 0.9], opacity: 1 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary/10 rounded-full blur-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl">✨</span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl font-bold text-primary"
                >
                  Stay Tuned!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg text-foreground"
                >
                  We&apos;re preparing something awesome for you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-sm text-muted-foreground"
                >
                  Coming soon...
                </motion.p>
              </div>
            </motion.div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl w-full">
          <BackgroundGradient>
            <div
              className="section cta py-16 md:py-24 px-6 lg:px-8 relative overflow-hidden rounded-2xl my-1 mx-1"
              style={{
                background:
                  "linear-gradient(95.35deg, #000000 0.77%, #004A9F 50.41%, #071A37 99.86%), url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/swatch_gtmpsh.png')",
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-0"></div>
              <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                    Ready to Make an
                    <motion.span
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      className="text-primary block"
                    >
                      Impact with CAiRL?
                    </motion.span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                    Explore how you can get involved as a student, researcher,
                    partner, or sponsor in our mission to advance AI for social
                    good.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-2xl mx-auto">
                    <button
                      onClick={() => handleButtonClick("member")}
                      className="flex-1 bg-primary text-primary-foreground font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
                    >
                      Become a Member
                    </button>
                    <button
                      onClick={() => handleButtonClick("sponsor")}
                      className="flex-1 bg-transparent border-2 border-primary text-primary font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
                    >
                      Sponsor a Program
                    </button>
                    <button
                      onClick={() => handleButtonClick("partnership")}
                      className="flex-1 bg-transparent border-2 border-primary text-primary font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
                    >
                      Start a Partnership
                    </button>
                  </div>
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
