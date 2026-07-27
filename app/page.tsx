import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArchitecturalFeatureBanner from "@/components/ArchitecturalFeatureBanner";
import ProjectsSection from "@/components/ProjectsSection";
import OfficesSection from "@/components/OfficesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Header />
      <Hero />
      <ArchitecturalFeatureBanner />
      <ProjectsSection />
      <OfficesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
