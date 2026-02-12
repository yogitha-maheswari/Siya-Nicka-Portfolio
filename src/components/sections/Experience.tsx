"use client";

import { motion } from "framer-motion";
import { experienceItems, skills } from "@/data/experienceData";
import { CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-section"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* ================= EXPERIENCE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
              Experience
            </p>

            <h2 className="text-editorial text-4xl font-light md:text-5xl mb-10">
              Work & Projects
            </h2>

            {/* Timeline */}
            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  {/* Timeline line */}
                  <div className="timeline-line absolute left-0 top-0 h-full w-px" />

                  {/* Timeline dot */}
                  <span className="timeline-dot absolute left-0 top-2 -translate-x-1/2 h-2 w-2 rounded-full" />

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-light
                      text-primary-force/70
                      group-hover:text-primary-force
                      transition-colors
                      duration-300
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-sm nav-text mt-1">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= SKILLS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
              Expertise
            </p>

            <h2 className="text-editorial text-4xl font-light md:text-5xl mb-10">
              Skills
            </h2>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <CheckCircle className="h-4 w-4 stroke-current icon-fade" />
                  <span className="text-fade transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div
              className="mt-12 glass-card rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Quote text – slightly dull */}
              <p className="text-editorial text-xl italic text-muted-foreground/2 mb-4">
                “Every frame tells a story. I bring confidence and elegance to
                every project.”
              </p>

              {/* Name – keep pink */}
              <p className="text-xs uppercase tracking-[0.2em] text-primary-force">
                — Siya Nicka
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;