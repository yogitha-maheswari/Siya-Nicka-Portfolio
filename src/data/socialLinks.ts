/**
 * SOCIAL MEDIA LINKS
 * ==================
 * All social media profile URLs.
 * Edit this file to update social links.
 */

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  handle?: string;
  icon:
    | "instagram"
    | "pinterest"
    | "twitter"
    | "youtube"
    | "tiktok"
    | "email"
    | "whatsapp";
}

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    platform: "Email",
    url: "mailto:siyanicka12@gmail.com",
    handle: "siyanicka12@gmail.com",
    icon: "email",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    url: "https://wa.me/918667733239",
    handle: "+91 8667733239",
    icon: "whatsapp",
  },
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://www.instagram.com/medusa_servent",
    handle: "@medusa_servent",
    icon: "instagram",
  },
  {
    id: "pinterest",
    platform: "Pinterest",
    url: "https://www.pinterest.com/siyanicka/",
    handle: "@siyanicka",
    icon: "pinterest",
  },
];

// Primary social for display
export const primarySocial = socialLinks[0];
