"use client";

import FAQs from "@/components/about/FAQs";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Team from "@/components/about/Team";
import { useEffect } from "react";
import Hero from "@/components/about/Hero";
import MOU from "@/components/about/MOU";
import Journey from "@/components/about/Journey";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const AboutPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background overflow-x-hidden isolate">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* About Header */}
            <Hero />
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          <div className="container mx-auto">
            {/* Our Journey Section */}
            <Journey />
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/40"
        >
          {/* Mission Section */}
          <Mission />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          {/* Vision Section */}
          <Vision />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/40"
        >
          {/* Team Section */}
          <Team />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          {/* MOU Section */}
          <MOU />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as [
                  number,
                  number,
                  number,
                  number
                ],
              },
            },
          }}
          className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/40"
        >
          {/* FAQs Section */}
          <FAQs />
        </motion.section>
      </main>
    </Layout>
  );
};

export default AboutPage;
