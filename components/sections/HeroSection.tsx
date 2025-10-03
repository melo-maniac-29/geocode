import CountdownTimer from "@/components/CountdownTimer";
import GlowButton from "@/components/GlowButton";
import { MapPin, Calendar, Trophy } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
      <div className="text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
          <span className="text-red-500 font-semibold">Hosted by CEK CSE Department</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent animate-pulse">
          GEOCODE
        </h1>

        <div className="text-3xl md:text-5xl font-bold mb-6 text-white">
          HACKATHON 2025
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-500" />
            <span>October 10-11, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>College of Engineering Kidangoor</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-red-500" />
            <span>₹15K Prize Pool + Internships</span>
          </div>
        </div>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <GlowButton href="#register">
            Register Now
          </GlowButton>
          <GlowButton href="#about" variant="secondary">
            Learn More
          </GlowButton>
        </div>
      </div>
    </section>
  );
}