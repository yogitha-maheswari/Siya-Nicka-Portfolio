// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /* =========================
         Fonts
      ========================= */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],

        // 👇 used by hero (font-editorial)
        editorial: ["Playfair Display", "serif"],
      },

      /* =========================
         Colors (CSS-variable driven)
      ========================= */
      colors: {
        /* Core */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* ADD THIS */
        section: "hsl(var(--section))",
        

        nav: "hsl(var(--nav-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* Semantic */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        destructive: "hsl(var(--destructive))",

        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",

        /* Luxury Palette */
        cream: "hsl(var(--cream))",
        champagne: "hsl(var(--champagne))",
        rose: "hsl(var(--rose))",
        blush: "hsl(var(--blush))",
        obsidian: "hsl(var(--obsidian))",
        onyx: "hsl(var(--onyx))",
        graphite: "hsl(var(--graphite))",
      },


      /* =========================
         Radius
      ========================= */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* =========================
         Animations
      ========================= */
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },

      /* =========================
         Backgrounds
      ========================= */
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
