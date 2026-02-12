/**
 * EXPERIENCE DATA
 * ===============
 * Work experience and achievements.
 * Edit this file to update the experience section.
 */

export interface ExperienceItem {
  id: string;
  title: string;
  description?: string;
  year?: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Editorial Photoshoots",
    description: "High-fashion editorial work for magazines and lookbooks",
  },
  {
    id: "exp-2",
    title: "Fashion & Lifestyle Campaigns",
    description: "Brand campaigns for fashion and lifestyle products",
  },
  {
    id: "exp-3",
    title: "Runway Practice Projects",
    description: "Runway training and fashion show experience",
  },
  {
    id: "exp-4",
    title: "Traditional & Ethnic Wear",
    description: "Saree, lehenga, and ethnic fashion shoots",
  },
  {
    id: "exp-5",
    title: "Commercial Photography",
    description: "Product and brand promotional content",
  },
];

export const skills = [
  "Runway Walk",
  "Posing",
  "Expression Range",
  "Styling Versatility",
  "Camera Presence",
];
