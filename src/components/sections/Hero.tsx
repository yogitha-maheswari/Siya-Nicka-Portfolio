"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { modelProfile } from "@/data/modelProfile";

const Hero = () => {
  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* ================= BACKGROUND ================= */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/hero_section/hero_image_cropped.png')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/40 to-transparent" />
      </motion.div>

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full max-w-7xl flex-col justify-center px-6 md:px-16">
        {/* TOP TAGLINE (fixed for mobile) */}
        <motion.p
          className="
            mb-6
            text-[10px] sm:text-xs
            uppercase
            tracking-[0.2em] sm:tracking-[0.4em]
            text-primary-force
            whitespace-nowrap
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          EDITORIAL <span className="mx-2">•</span> RUNWAY{" "}
          <span className="mx-2">•</span> COMMERCIAL
        </motion.p>

        {/* NAME */}
        <motion.h1
          className="font-editorial text-left text-5xl font-light leading-none sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 32, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        >
          <span className="text-foreground">
            {modelProfile.firstName}{" "}
          </span>
          <span className="italic text-primary-force">
            {modelProfile.lastName}
          </span>
        </motion.h1>

        {/* DIVIDER */}
        <motion.div
          className="mt-6 h-px w-24 bg-primary/60"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{ transformOrigin: "left" }}
        />

        {/* META LINE */}
        <motion.div
          className="mt-6 flex items-center gap-3 text-sm nav-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <span className="text-primary-force">•</span>
          <span>{modelProfile.location}</span>
          <span className="text-primary-force">•</span>
          <span>Available For Bookings</span>
        </motion.div>

        {/* CTA */}
        <motion.button
          onClick={scrollToPortfolio}
          className="btn-luxury mt-10 w-65"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          View Portfolio
        </motion.button>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer text-primary-force/60 hover:text-primary-force"
          onClick={scrollToPortfolio}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
