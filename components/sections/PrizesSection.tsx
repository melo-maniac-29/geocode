"use client";

import Section from "@/components/Section";
import { Trophy, Award, Star } from "lucide-react";

export default function PrizesSection() {
  return (
    <Section
      id="prizes"
      title="Prizes & Rewards"
      subtitle="₹15,000 prize pool plus exciting internship opportunities"
    >
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative">
        {/* 1st Place with rays */}
        <div className="relative group">
          {/* Glowing rays behind trophy */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-64 h-64 rounded-full bg-red-500/20 animate-ping-slow blur-3xl"></div>
            <div className="w-56 h-56 rounded-full bg-red-400/20 animate-ping-slower blur-2xl absolute"></div>
          </div>
          <div className="relative bg-gradient-to-br from-red-500/30 via-red-600/10 to-gray-900/10 
            border border-red-500/50 rounded-3xl p-8 text-center transform group-hover:scale-105 
            group-hover:shadow-2xl transition-all duration-300 backdrop-blur-md shadow-red-500/20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 
              bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full font-bold 
              shadow-lg text-lg animate-bounce">
               1st Place
            </div>
            <Trophy className="w-24 h-24 text-red-500 mx-auto mb-4 mt-4 animate-pulse" />
            <div className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg">₹10,000</div>
            <div className="text-red-200 font-semibold text-lg">+ Internship Opportunity</div>
          </div>
        </div>

        {/* 2nd Place */}
        <div className="relative group">
          <div className="relative bg-gradient-to-br from-gray-500/20 via-gray-600/10 to-gray-900/10 
            border border-gray-500/50 rounded-3xl p-8 text-center transform group-hover:scale-105 
            group-hover:shadow-2xl transition-all duration-300 backdrop-blur-md shadow-gray-500/20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 
              bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-2 rounded-full font-bold 
              shadow-lg text-lg animate-bounce">
               2nd Place
            </div>
            <Trophy className="w-20 h-20 text-gray-400 mx-auto mb-4 mt-4" />
            <div className="text-4xl font-bold text-white mb-2 drop-shadow-md">₹5,000</div>
            <div className="text-gray-300 font-semibold text-lg">+ Internship Opportunity</div>
          </div>
        </div>

        {/* All Participants with confetti */}
        <div className="relative group">
          {/* Confetti dots */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`w-2 h-2 bg-red-500 rounded-full absolute animate-fall`} style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}></div>
            ))}
          </div>
          <div className="relative bg-gradient-to-br from-red-400/20 via-red-500/10 to-gray-900/10 
            border border-red-400/50 rounded-3xl p-8 text-center transform group-hover:scale-105 
            group-hover:shadow-2xl transition-all duration-300 backdrop-blur-md shadow-red-400/20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 
              bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-bold 
              shadow-lg text-lg animate-bounce">
               All Participants
            </div>
            <Award className="w-20 h-20 text-red-500 mx-auto mb-4 mt-4 animate-bounce" />
            <div className="text-2xl font-bold text-white mb-2 drop-shadow-md">Certificates</div>
            <div className="text-red-200 font-semibold text-lg">+ Networking & Mentorship</div>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="mt-16 max-w-4xl mx-auto relative">
        <div className="bg-gray-900/60 border border-red-500/40 rounded-3xl p-8 backdrop-blur-md shadow-xl">
          <h4 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-red-500" /> Additional Benefits
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="text-red-500">▸</span>
                <span className="font-medium">Internship Opportunities for standout participants</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-red-500">▸</span>
                <span className="font-medium">Industry mentorship during event</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="text-red-500">▸</span>
                <span className="font-medium">Networking with industry professionals</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-red-500">▸</span>
                <span className="font-medium">Meals, refreshments & certificates included</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes for confetti fall */}
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(120%) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.2; }
        }
        .animate-ping-slow { animation: ping-slow 2.5s infinite; }

        @keyframes ping-slower {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0.1; }
        }
        .animate-ping-slower { animation: ping-slower 4s infinite; }
      `}</style>
    </Section>
  );
}
