import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import LatestCreations from "@/components/LatestCreations";
import Categories from "@/components/Categories";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <LatestCreations />
        <Categories />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
