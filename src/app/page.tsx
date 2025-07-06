"use client";

import { useEffect } from "react";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Transformation from "@/components/landing/Transformation";
import Events from "@/components/landing/Events";
import CTA from "@/components/CTA";
import Contact from "@/components/landing/Contact";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Landing = () => {
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
      <main className="min-h-screen bg-background overflow-x-hidden">
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
          <Hero />
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
          id="about"
        >
          <div className="max-w-7xl mx-auto">
            <About />
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
          id="transformation"
        >
          <div className="max-w-7xl mx-auto">
            <Transformation />
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
          id="events"
        >
          <div className="max-w-7xl mx-auto">
            <Events />
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
          className="w-full py-16 md:py-24"
          id="cta"
        >
          <CTA />
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
          id="contact"
        >
          <Contact />
        </motion.section>
      </main>
    </Layout>
  );
};

export default Landing;
