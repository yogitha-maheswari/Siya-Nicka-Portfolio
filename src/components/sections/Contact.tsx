"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import emailjs from "emailjs-com";
import { contactConfig } from "@/data/contactConfig";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          purpose: formData.purpose,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent",
        description: contactConfig.messages.success,
      });

      setFormData({ name: "", email: "", purpose: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* Consistent input style */
  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 " +
    "text-foreground placeholder:text-muted-foreground/40 transition-all " +
    "focus:border-primary-force focus:outline-none focus:ring-0";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-section">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
              Contact
            </p>

            <h2 className="text-editorial text-4xl font-light md:text-5xl mb-6">
              {contactConfig.formTitle}
            </h2>

            <p className="nav-text text-lg mb-10">
              {contactConfig.formSubtitle}
            </p>

            {/* Contact Card */}
            <div className="glass-card rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "hsl(var(--primary) / 0.12)" }}
                >
                  <Mail className="h-5 w-5 text-primary-force" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] nav-text mb-1">
                    Email
                  </p>
                  <p className="text-foreground">
                    {contactConfig.directContact.showEmail
                      ? contactConfig.directContact.email
                      : "Use the form →"}
                  </p>
                </div>
              </div>

              <div className="border-t border-border/40 pt-6">
                <p className="text-sm nav-text">
                  Available for editorial, commercial, runway, and collaborative projects.
                  Response within 24 - 48 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] nav-text mb-2">
                  {contactConfig.fields.name.label}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={contactConfig.fields.name.placeholder}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] nav-text mb-2">
                  {contactConfig.fields.email.label}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={contactConfig.fields.email.placeholder}
                  className={inputClass}
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] nav-text mb-2">
                  {contactConfig.fields.purpose.label}
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{ backgroundColor: "hsl(var(--section))" }}
                >
                  <option value="" disabled>
                    {contactConfig.fields.purpose.placeholder}
                  </option>
                  {contactConfig.fields.purpose.options.map((option) => (
                    <option
                      key={option}
                      value={option}
                      style={{
                        background: "hsl(var(--section))",
                        color: "white",
                      }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] nav-text mb-2">
                  {contactConfig.fields.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={contactConfig.fields.message.placeholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
