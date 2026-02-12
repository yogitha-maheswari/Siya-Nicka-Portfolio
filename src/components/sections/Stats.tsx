"use client";

import { motion } from "framer-motion";
import { modelProfile } from "@/data/modelProfile";
import {
  Ruler,
  Eye,
  Sparkles,
  MapPin,
  Plane,
  Scale,
  Footprints,
} from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const iconClass = "h-4 w-4 icon-fade";

const Stats = () => {
  const { measurements } = modelProfile;

  const stats: StatItem[] = [
    { label: "Height", value: measurements.height, icon: <Ruler className={iconClass} /> },
    { label: "Bust", value: measurements.bust, icon: <Sparkles className={iconClass} /> },
    { label: "Waist", value: measurements.waist, icon: <Sparkles className={iconClass} /> },
    { label: "Hips", value: measurements.hips, icon: <Sparkles className={iconClass} /> },
    { label: "Shoe Size", value: measurements.shoeSize, icon: <Footprints className={iconClass} /> },
    { label: "Eye Color", value: measurements.eyeColor, icon: <Eye className={iconClass} /> },
    { label: "Hair Color", value: measurements.hairColor, icon: <Sparkles className={iconClass} /> },
    { label: "Skin Tone", value: measurements.skinTone, icon: <Sparkles className={iconClass} /> },
    { label: "Weight", value: measurements.weight, icon: <Scale className={iconClass} /> },
    { label: "Location", value: modelProfile.location, icon: <MapPin className={iconClass} /> },
    {
      label: "Travel",
      value: modelProfile.willingToTravel ? "Willing to Travel" : "Local Only",
      icon: <Plane className={iconClass} />,
    },
  ];

  return (
    <section id="stats" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
            Measurements
          </p>
          <h2 className="text-editorial text-4xl font-light md:text-5xl lg:text-6xl">
            Model Details
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Stats Card */}
        <motion.div
          className="mx-auto max-w-4xl glass-card rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header */}
          <div className="mb-10 text-center border-b border-border/50 pb-8">
            <h3 className="text-editorial text-3xl md:text-4xl font-light mb-2">
              {modelProfile.name}
            </h3>
            <p className="text-sm nav-text uppercase tracking-[0.2em]">
              {modelProfile.tagline}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Icon */}
                <div className="mb-2 flex justify-center">
                  {stat.icon}
                </div>

                {/* Value */}
                <p className="text-xl font-light text-foreground mb-1">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="text-[10px] uppercase tracking-[0.2em] nav-text">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
