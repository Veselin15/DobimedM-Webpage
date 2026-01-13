import Hero from "@/components/Hero";
import About from "@/components/About"; // Нова
import Services from "@/components/Services";
import Gallery from "@/components/Gallery"; // Нова
import License from "@/components/License";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <License />
      <Gallery />
      <Footer />
    </main>
  );
}