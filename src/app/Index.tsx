import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Showreel from "@/components/sections/Showreel";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { modelProfile } from "@/data/modelProfile";

const Index = () => {
  return (
    <>
      {/* SEO Meta - handled in index.html for this React SPA */}
      <title>{`${modelProfile.name} | Fashion Model Portfolio`}</title>

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
    </>
  );
};

export default Index;
