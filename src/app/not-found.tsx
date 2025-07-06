"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="container px-4 md:px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-serif text-8xl md:text-9xl font-bold text-primary mb-4 tracking-tighter">
                404
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Page Not Found
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
                {`Sorry, the page you are looking for doesn't exist or has been
                moved.`}
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="rounded-full px-8 py-4 text-lg font-semibold">
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="relative mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl -z-10"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}