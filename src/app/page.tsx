import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Showreel from "@/components/sections/Showreel";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Stats />
      <Experience />
      <Showreel />
      <Contact />
      <Footer />
    </main>
  );
}
