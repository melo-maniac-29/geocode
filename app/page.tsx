import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EventDetailsSection from "@/components/sections/EventDetailsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import PrizesSection from "@/components/sections/PrizesSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventDetailsSection />
      <ScheduleSection />
      <PrizesSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
