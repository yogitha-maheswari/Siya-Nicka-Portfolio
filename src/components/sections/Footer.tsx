"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { modelProfile } from "@/data/modelProfile";
import { socialLinks } from "@/data/socialLinks";

const PinterestIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 0C5.53 0 .25 5.29.25 11.82c0 2.09.55 4.14 1.6 5.94L0 24l6.44-1.67a11.7 11.7 0 0 0 5.6 1.43h.01c6.5 0 11.8-5.29 11.8-11.82C23.85 5.29 18.55 0 12.04 0Zm6.9 17.21c-.29.82-1.44 1.51-2.35 1.7-.62.13-1.43.23-4.64-1-4.1-1.6-6.74-5.52-6.95-5.79-.2-.27-1.65-2.2-1.65-4.2 0-2 .96-2.98 1.3-3.39.34-.41.74-.51.98-.51.25 0 .49 0 .7.01.23.01.53-.08.83.63.29.72 1 2.5 1.09 2.68.09.18.15.39.03.62-.12.24-.18.39-.36.6-.18.21-.38.47-.55.64-.18.18-.36.37-.15.72.21.35.94 1.55 2.01 2.5 1.38 1.23 2.55 1.61 2.91 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.08.98 2.44 1.16.36.18.6.27.69.42.09.15.09.86-.2 1.68Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "instagram":
        return <Instagram className="h-5 w-5 footer-fade" />;
      case "pinterest":
        return <PinterestIcon />;
      case "email":
        return <Mail className="h-5 w-5 footer-fade" />;
      case "whatsapp":
        return <WhatsAppIcon />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <motion.h3
            className="text-editorial text-3xl font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {modelProfile.name}
          </motion.h3>

          {/* Tagline */}
          <motion.p
            className="text-xs uppercase tracking-[0.3em] nav-text mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {modelProfile.tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-group flex items-center gap-2 nav-text"
              >
                <span className="footer-fade">
                  {getSocialIcon(social.icon)}
                </span>
                <span className="text-sm hidden sm:inline footer-fade">
                  {social.handle}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="section-divider mb-8" />

          {/* Copyright */}
          <motion.p
            className="text-xs nav-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {currentYear} {modelProfile.name}. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
