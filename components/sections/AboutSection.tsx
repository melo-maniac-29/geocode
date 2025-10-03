import Section from "@/components/Section";
import { Target, Users, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="About the Hackathon"
      subtitle="A 22-hour intense coding marathon focused on DIGIPIN and geolocation innovation"
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-black/50 border border-red-500/30 rounded-lg p-8 hover:border-red-500/60 transition-all duration-300 group">
          <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
            <Target className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Theme: DIGIPIN</h3>
          <p className="text-gray-400">
            This hackathon is centered around <strong>DIGIPIN (Digital Pincode)</strong> – a modern addressing system designed to simplify and secure digital communication, logistics, and location-based services.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p>Learn more at:</p>
            <div className="flex gap-4">
              <a href="https://digipin.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                digipin.org
              </a>
              <a href="https://digipin.dev" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                digipin.dev
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black/50 border border-red-500/30 rounded-lg p-8 hover:border-red-500/60 transition-all duration-300 group">
          <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
            <Users className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Organizers</h3>
          <p className="text-gray-400">
            Organized by Lance & Eallisto under the College of Engineering Kidangoor Computer Science and Engineering Department with industry mentors and sponsors.
          </p>
          <div className="mt-4 text-sm text-gray-300">
            <p className="text-red-500 font-semibold">Sponsored by Eallisto</p>
          </div>
        </div>

        <div className="bg-black/50 border border-red-500/30 rounded-lg p-8 hover:border-red-500/60 transition-all duration-300 group">
          <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
            <Award className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Benefits</h3>
          <p className="text-gray-400">
            Industry mentorship, meals provided, participation certificates, networking opportunities, and exciting prizes including internship opportunities for standout participants.
          </p>
        </div>
      </div>
    </Section>
  );
}