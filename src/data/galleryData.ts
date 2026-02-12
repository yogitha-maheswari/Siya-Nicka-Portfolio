/**
 * GALLERY DATA
 * ============
 * All portfolio images organized by category.
 * Edit this file to add, remove, or reorganize images.
 */

// Import all gallery images
import type { StaticImageData } from "next/image";

// Editorial
import editorial1 from "@/assets/gallery_section/editorial/Editorial (1).jpg";
import editorial2 from "@/assets/gallery_section/editorial/Editorial (2).jpg";
import editorial3 from "@/assets/gallery_section/editorial/Editorial (3).jpg";
import editorial4 from "@/assets/gallery_section/editorial/Editorial (4).jpg";
import editorial5 from "@/assets/gallery_section/editorial/Editorial (5).jpg";
import editorial6 from "@/assets/gallery_section/editorial/Editorial (6).jpg";
import editorial7 from "@/assets/gallery_section/editorial/Editorial (7).jpg";
import editorial8 from "@/assets/gallery_section/editorial/Editorial (8).jpg";
import editorial9 from "@/assets/gallery_section/editorial/Editorial (9).jpg";

// Fashion
import fashion1 from "@/assets/gallery_section/fashion/Fashion (1).jpg";
import fashion2 from "@/assets/gallery_section/fashion/Fashion (2).jpg";
import fashion3 from "@/assets/gallery_section/fashion/Fashion (3).jpg";
import fashion4 from "@/assets/gallery_section/fashion/Fashion (4).jpg";
import fashion5 from "@/assets/gallery_section/fashion/Fashion (5).jpg";
import fashion6 from "@/assets/gallery_section/fashion/Fashion (6).jpg";
import fashion7 from "@/assets/gallery_section/fashion/Fashion (7).jpg";
import fashion8 from "@/assets/gallery_section/fashion/Fashion (8).jpg";
import fashion9 from "@/assets/gallery_section/fashion/Fashion (9).jpg";
import fashion10 from "@/assets/gallery_section/fashion/Fashion (10).jpg";
import fashion11 from "@/assets/gallery_section/fashion/Fashion (11).jpg";
import fashion12 from "@/assets/gallery_section/fashion/Fashion (12).jpg";
import fashion13 from "@/assets/gallery_section/fashion/Fashion (13).jpg";
import fashion14 from "@/assets/gallery_section/fashion/Fashion (14).jpg";
import fashion15 from "@/assets/gallery_section/fashion/Fashion (15).jpg";
import fashion16 from "@/assets/gallery_section/fashion/Fashion (16).jpg";
import fashion17 from "@/assets/gallery_section/fashion/Fashion (17).jpg";

// Commercial
import commercial1 from "@/assets/gallery_section/commercial/Commercial (1).jpg";
import commercial2 from "@/assets/gallery_section/commercial/Commercial (2).jpg";
import commercial3 from "@/assets/gallery_section/commercial/Commercial (3).jpg";
import commercial4 from "@/assets/gallery_section/commercial/Commercial (4).jpg";
import commercial5 from "@/assets/gallery_section/commercial/Commercial (5).jpg";
import commercial6 from "@/assets/gallery_section/commercial/Commercial (6).jpg";
import commercial7 from "@/assets/gallery_section/commercial/Commercial (7).jpg";
import commercial8 from "@/assets/gallery_section/commercial/Commercial (8).jpg";

// Lifestyle
import lifestyle1 from "@/assets/gallery_section/lifestyle/Lifestyle (1).jpg";
import lifestyle2 from "@/assets/gallery_section/lifestyle/Lifestyle (2).jpg";
import lifestyle3 from "@/assets/gallery_section/lifestyle/Lifestyle (3).jpg";
import lifestyle4 from "@/assets/gallery_section/lifestyle/Lifestyle (4).jpg";
import lifestyle5 from "@/assets/gallery_section/lifestyle/Lifestyle (5).jpg";
import lifestyle6 from "@/assets/gallery_section/lifestyle/Lifestyle (6).jpg";
import lifestyle7 from "@/assets/gallery_section/lifestyle/Lifestyle (7).jpg";
import lifestyle8 from "@/assets/gallery_section/lifestyle/Lifestyle (8).jpg";
import lifestyle9 from "@/assets/gallery_section/lifestyle/Lifestyle (9).jpg";
import lifestyle10 from "@/assets/gallery_section/lifestyle/Lifestyle (10).jpg";
import lifestyle11 from "@/assets/gallery_section/lifestyle/Lifestyle (11).jpg";

// Runway
import runway1 from "@/assets/gallery_section/runway/Runway (1).jpg";
import runway2 from "@/assets/gallery_section/runway/Runway (2).jpg";
import runway3 from "@/assets/gallery_section/runway/Runway (3).jpg";
import runway4 from "@/assets/gallery_section/runway/Runway (4).jpg";
import runway5 from "@/assets/gallery_section/runway/Runway (5).jpg";
import runway6 from "@/assets/gallery_section/runway/Runway (6).jpg";

// Beauty
import beauty1 from "@/assets/gallery_section/beauty/Beauty (1).jpg";
import beauty2 from "@/assets/gallery_section/beauty/Beauty (2).jpg";
import beauty3 from "@/assets/gallery_section/beauty/Beauty (3).jpg";
import beauty4 from "@/assets/gallery_section/beauty/Beauty (4).jpg";


export type GalleryCategory =
  | "All"
  | "Fashion"
  | "Editorial"
  | "Commercial"
  | "Runway"
  | "Beauty"
  | "Lifestyle";

export interface GalleryImage {
  id: string;
  src: StaticImageData;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  featured?: boolean;
  showInAll?: boolean;
}

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Fashion",
  "Editorial",
  "Commercial",
  "Runway",
  "Beauty",
  "Lifestyle",
];

export const galleryImages: GalleryImage[] = [
  // Editorial
  {
    id: "editorial-1",
    src: editorial1,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: false,
  },
  {
    id: "editorial-2",
    src: editorial2,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: true,
  },
  {
    id: "editorial-3",
    src: editorial3,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: false,
  },
  {
    id: "editorial-4",
    src: editorial4,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: true,
  },
  {
    id: "editorial-5",
    src: editorial5,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: true,
  },
  {
    id: "editorial-6",
    src: editorial6,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: true,
  },
  {
    id: "editorial-7",
    src: editorial7,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: true,
  },
  {
    id: "editorial-8",
    src: editorial8,
    alt: "Editorial shoot – black and white portrait",
    category: "Editorial",
    showInAll: true,
  },
  {
    id: "editorial-9",
    src: editorial9,
    alt: "Editorial shoot – red cinematic portrait",
    category: "Editorial",
    showInAll: false,
  },

  // Fashion
  {
    id: "fashion-1",
    src: fashion1,
    alt: "Fashion shoot – natural light portrait",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-2",
    src: fashion2,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: true,
  },
  {
    id: "fashion-3",
    src: fashion3,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: true,
  },
  {
    id: "fashion-4",
    src: fashion4,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: true,
  },
  {
    id: "fashion-5",
    src: fashion5,
    alt: "Fashion shoot – natural light portrait",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-6",
    src: fashion6,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-7",
    src: fashion7,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: true,
  },
  {
    id: "fashion-8",
    src: fashion8,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-9",
    src: fashion9,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: true,
  },
  {
    id: "fashion-10",
    src: fashion10,
    alt: "Fashion shoot – street market editorial look",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-11",
    src: fashion11,
    alt: "Fashion shoot – leather jacket urban portrait",
    category: "Fashion",
    showInAll: true,
  },
  {
    id: "fashion-13",
    src: fashion13,
    alt: "Fashion shoot – street market editorial look",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-14",
    src: fashion14,
    alt: "Fashion shoot – golden flowing dress outdoors",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-15",
    src: fashion15,
    alt: "Fashion shoot – golden flowing dress outdoors",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-16",
    src: fashion16,
    alt: "Fashion shoot – golden flowing dress outdoors",
    category: "Fashion",
    showInAll: false,
  },
  {
    id: "fashion-17",
    src: fashion17,
    alt: "Fashion shoot – golden flowing dress outdoors",
    category: "Fashion",
    showInAll: false,
  },


  // Commercial
  {
    id: "commercial-3",
    src: commercial3,
    alt: "Commercial shoot - traditional attire",
    category: "Commercial",
    showInAll: true,
  },
  {
    id: "commercial-1",
    src: commercial1,
    alt: "Commercial shoot - traditional attire",
    category: "Commercial",
    showInAll: true,
  },
  {
    id: "commercial-2",
    src: commercial2,
    alt: "Commercial shoot - traditional attire",
    category: "Commercial",
    showInAll: true,
  },
  {
    id: "commercial-4",
    src: commercial4,
    alt: "Commercial shoot - traditional attire",
    category: "Commercial",
    showInAll: false,
  },
  {
    id: "commercial-5",
    src: commercial5,
    alt: "Commercial shoot - traditional attire",
    category: "Commercial",
    showInAll: false,
  },
  {
    id: "commercial-6",
    src: commercial6,
    alt: "Commercial shoot - black drape saree",
    category: "Commercial",
    showInAll: false,
  },
  {
    id: "commercial-7",
    src: commercial7,
    alt: "Commercial shoot - black drape saree",
    category: "Commercial",
    showInAll: false,
  },
  {
    id: "commercial-8",
    src: commercial8,
    alt: "Commercial shoot - black drape saree",
    category: "Commercial",
    showInAll: false,
  },

  // Beauty
  {
    id: "beauty-1",
    src: beauty1,
    alt: "Beauty shot – extreme eye close-up",
    category: "Beauty",
    showInAll: false,
  },
  {
    id: "beauty-2",
    src: beauty2,
    alt: "Beauty shot – soft indoor portrait",
    category: "Beauty",
    showInAll: true,
  },
  {
    id: "beauty-3",
    src: beauty3,
    alt: "Beauty shot – natural outdoor close-up",
    category: "Beauty",
    showInAll: false,
  },
  {
    id: "beauty-4",
    src: beauty4,
    alt: "Beauty shot – dramatic light close-up",
    category: "Beauty",
    showInAll: false,
  },

  
  
  {
    id: "fashion-12",
    src: fashion12,
    alt: "Fashion shoot – street market editorial look",
    category: "Fashion",
    showInAll: true,
  },

  // Lifestyle
  {
    id: "lifestyle-1",
    src: lifestyle1,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-2",
    src: lifestyle2,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-3",
    src: lifestyle3,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-4",
    src: lifestyle4,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-5",
    src: lifestyle5,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-6",
    src: lifestyle6,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-7",
    src: lifestyle7,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-8",
    src: lifestyle8,
    alt: "Lifestyle - natural indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-9",
    src: lifestyle9,
    alt: "Lifestyle - indoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-10",
    src: lifestyle10,
    alt: "Lifestyle - natural outdoor setting",
    category: "Lifestyle",
    showInAll: false,
  },
  {
    id: "lifestyle-11",
    src: lifestyle11,
    alt: "Lifestyle - indoor setting",
    category: "Lifestyle",
    showInAll: true,
  },

  // Runway
  {
    id: "runway-1",
    src: runway1,
    alt: "Runway - fashion show",
    category: "Runway",
    showInAll: false,
  },
  {
    id: "runway-2",
    src: runway2,
    alt: "Runway - fashion show",
    category: "Runway",
    showInAll: false,
  },
  {
    id: "runway-3",
    src: runway3,
    alt: "Runway - fashion show",
    category: "Runway",
    showInAll: false,
  },
  {
    id: "runway-4",
    src: runway4,
    alt: "Runway - fashion show",
    category: "Runway",
    showInAll: false,
  },
  {
    id: "runway-5",
    src: runway5,
    alt: "Runway - fashion show",
    category: "Runway",
    showInAll: false,
  },
  {
    id: "runway-6",
    src: runway6,
    alt: "Runway - fashion show",
    category: "Runway",
    showInAll: false,
  },
];
