/**
 * MODEL PROFILE DATA
 * ==================
 * All personal information and measurements for the model.
 * Edit this file to update the model's details across the entire website.
 */

/* -----------------------------
   Utility: Calculate Age
----------------------------- */
function calculateAge(dob: string): number {
  // Expecting format: DD/MM/YYYY
  const [day, month, year] = dob.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust if birthday hasn’t occurred yet this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

/* -----------------------------
   Model Profile
----------------------------- */
const dateOfBirth = "12/02/2004";

export const modelProfile = {
  // Identity
  name: "Siya Nicka",
  firstName: "Siya",
  lastName: "Nicka",
  tagline: "Fashion Model",
  dateOfBirth: dateOfBirth,
  age: calculateAge(dateOfBirth),

  // Location & Availability
  location: "Chennai",
  country: "India",
  willingToTravel: true,
  availabilityStatus: "Available for bookings",

  // Measurements
  measurements: {
    height: "158 cm",
    bust: "34 B",
    waist: "32 in",
    hips: "36 in",
    shoeSize: "UK 5",
    eyeColor: "Black",
    hairColor: "Black",
    skinTone: "Dusky",
    weight: "68 kg",
  },

  // About section content
  about: {
    headline: "Elegance in Motion",
    description: `I am a Chennai-based fashion model specializing in editorial, runway, and commercial work. With a strong on-camera presence and versatile styling, I bring confidence, poise, and elegance to every project I am part of.`,
    shortBio: "Editorial • Runway • Commercial",
  },
};

export type ModelProfile = typeof modelProfile;
