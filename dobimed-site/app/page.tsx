import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process"; // <--- Импортирай
import License from "@/components/License";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process /> {/* <--- Сложи го тук */}
      <License />
      <Gallery />
      <Footer />
    </main>
  );
}