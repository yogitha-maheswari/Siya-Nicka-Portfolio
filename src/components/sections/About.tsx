"use client";

import { motion } from "framer-motion";
import { modelProfile } from "@/data/modelProfile";
import editorial3 from "../../assets/gallery_section/editorial/Editorial (3).jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-section">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-3/4 overflow-hidden">
              <img
                src={editorial3.src}
                alt={modelProfile.name}
                className="h-full w-full object-cover"
              />

              {/* Decorative frame */}
              <div
                className="absolute inset-4 border pointer-events-none"
                style={{ borderColor: "hsl(var(--primary))", opacity: 0.4 }}
              />
            </div>

            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 h-32 w-32 border"
              style={{ borderColor: "hsl(var(--primary))", opacity: 0.3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
              About
            </p>

            {/* Heading */}
            <h2 className="text-editorial text-4xl font-light md:text-5xl mb-6">
              {modelProfile.about.headline}
            </h2>

            {/* Description */}
            <p className="text-lg nav-text leading-relaxed">
              {modelProfile.about.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-lg">
                <p className="text-3xl font-light text-primary-force mb-1">
                  {modelProfile.age}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] nav-text">
                  Years Old
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <p className="text-3xl font-light text-primary-force mb-1">
                  {modelProfile.location}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] nav-text">
                  Based In
                </p>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Blinking dot */}
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full animate-ping"
                  style={{
                    background: "hsl(var(--primary))",
                    opacity: 0.6,
                  }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "hsl(var(--primary))" }}
                />
              </span>

              <span className="text-xs uppercase tracking-[0.15em] text-primary-force">
                {modelProfile.availabilityStatus}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
