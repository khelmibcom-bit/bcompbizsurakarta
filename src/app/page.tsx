import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollBackground from "@/components/ScrollBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import TrustSection from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollBackground />
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Services />
        <TechStack />
        <TrustSection />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollProgress />
    </>
  );
}
