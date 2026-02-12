"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Showreel = () => {
  return (
    <section id="showreel" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pink label */}
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
            Video
          </p>

          {/* Heading */}
          <h2 className="text-editorial text-4xl font-light md:text-5xl lg:text-6xl">
            Showreel
          </h2>

          <div className="section-divider mt-6" />
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-video glass-card rounded-lg overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-secondary to-background flex items-center justify-center">
              {/* Play Button with subtle pulse */}
              <div className="relative flex items-center justify-center">
                {/* Subtle blinking ring */}
                <motion.span
                  className="absolute h-20 w-20 rounded-full"
                  style={{ background: "hsl(var(--primary) / 0.2)" }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0, 0.35],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Button */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary-force/60 bg-background/60 backdrop-blur-sm">
                  <Play className="h-7 w-7 text-primary-force ml-1" />
                </div>
              </div>
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm">
              {/* Slide-in text */}
              <motion.p
                className="text-editorial text-2xl md:text-3xl text-foreground/90 mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Showreel coming soon
              </motion.p>

              {/* Underline */}
              <motion.div
                className="h-px w-16 bg-primary-force"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.7 }}
                whileHover={{ scaleX: 1.2, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ transformOrigin: "center" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
