import Section from "@/components/Section";
import { Trophy, Award } from "lucide-react";

export default function PrizesSection() {
  return (
    <Section
      id="prizes"
      title="Prizes & Rewards"
      subtitle="₹15,000 prize pool plus exciting internship opportunities"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-yellow-500/20 via-red-500/10 to-transparent border-2 border-yellow-500/50 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full font-bold">
            1st Place
          </div>
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 mt-4" />
          <div className="text-4xl font-bold text-white mb-2">₹10,000</div>
          <div className="text-gray-400">+ Internship Opportunity</div>
        </div>

        <div className="relative bg-gradient-to-br from-gray-400/20 via-red-500/10 to-transparent border-2 border-gray-400/50 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-400 text-black px-4 py-1 rounded-full font-bold">
            2nd Place
          </div>
          <Trophy className="w-20 h-20 text-gray-400 mx-auto mb-4 mt-4" />
          <div className="text-4xl font-bold text-white mb-2">₹5,000</div>
          <div className="text-gray-400">+ Internship Opportunity</div>
        </div>

        <div className="relative bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent border-2 border-red-500/50 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full font-bold">
            All Participants
          </div>
          <Award className="w-20 h-20 text-red-500 mx-auto mb-4 mt-4" />
          <div className="text-2xl font-bold text-white mb-2">Certificates</div>
          <div className="text-gray-400">+ Networking & Mentorship</div>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <div className="bg-black/50 border border-red-500/30 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4 text-center">Additional Benefits</h4>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span>Internship Opportunities for standout participants</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span>Industry mentorship during event</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span>Networking with industry professionals</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span>Meals, refreshments & certificates included</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}