import AboutSection from "@/HomeSections/AboutSection/AboutSection";
import Clients from "@/HomeSections/Clients/Clients";
import Hero from "@/HomeSections/Hero/Hero";
import Testimonials from "@/HomeSections/Testimonials/Testimonials";
import ThreeP from "@/HomeSections/ThreeP/ThreeP";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutSection />
      <ThreeP />
      <Testimonials />
      <Clients />
    </main>
  );
}
