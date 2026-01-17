import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import License from "@/components/License";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact"; // <--- 1. Импортирай
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Partners />
      <License />
      <Gallery />
      <Contact /> {/* <--- 2. Сложи го ТУК (преди Footer) */}
      <Footer />
    </main>
  );
}