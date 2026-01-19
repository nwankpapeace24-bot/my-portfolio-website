import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhoIAm from "@/components/WhoIAm";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoIAm />
      <Services />
      <Portfolio />
      <Testimonials />
      <Brands />
      <Contact />
    </main>
  );
}
