/**
 * CONTACT CONFIGURATION
 * =====================
 * Contact form and email settings.
 * Edit this file to update contact information.
 */

export const contactConfig = {
  // Email recipient for contact form submissions
  recipientEmail: "siyanicka12@gmail.com",

  // Contact form settings
  formTitle: "Get in Touch",
  formSubtitle: "For bookings and inquiries",

  // Form field labels
  fields: {
    name: {
      label: "Name",
      placeholder: "Your name",
    },
    email: {
      label: "Email",
      placeholder: "your@email.com",
    },
    purpose: {
      label: "Purpose",
      placeholder: "Select inquiry type",
      options: [
        "Editorial Shoot",
        "Commercial Project",
        "Fashion Campaign",
        "Runway Show",
        "Collaboration",
        "Other",
      ],
    },
    message: {
      label: "Message",
      placeholder: "Tell me about your project...",
    },
  },

  // Success/error messages
  messages: {
    success: "Thank you for your message. I'll get back to you soon.",
    error: "Something went wrong. Please try again or email directly.",
  },

  // Direct contact info (optional display)
  directContact: {
    showEmail: false, // Set to true to display email publicly
    email: "siyanicka12@gmail.com",
  },
};

export type ContactConfig = typeof contactConfig;
