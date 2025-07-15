import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhoIAm from "@/components/WhoIAm";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoIAm />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
