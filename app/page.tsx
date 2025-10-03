import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import Section from "@/components/Section";
import CountdownTimer from "@/components/CountdownTimer";
import GlowButton from "@/components/GlowButton";
import { MapPin, Calendar, Trophy, Users, Target, Clock, Award, Mail, Instagram, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <GridBackground />
      <Navbar />

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
              <span>CEK Campus</span>
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
            <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
            <p className="text-gray-400">
              Solve real-world problems using digital addressing and geolocation technologies to create innovative solutions for logistics, e-commerce, and student services.
            </p>
          </div>

          <div className="bg-black/50 border border-red-500/30 rounded-lg p-8 hover:border-red-500/60 transition-all duration-300 group">
            <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Organizers</h3>
            <p className="text-gray-400">
              Organized by Lance & Eallisto under the CEK Computer Science and Engineering Department with industry mentors and sponsors.
            </p>
          </div>

          <div className="bg-black/50 border border-red-500/30 rounded-lg p-8 hover:border-red-500/60 transition-all duration-300 group">
            <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
              <Award className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Benefits</h3>
            <p className="text-gray-400">
              Industry mentorship, meals provided, participation certificates, networking opportunities, and exciting prizes including internship opportunities.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="details"
        title="Event Details"
        subtitle="Everything you need to know about participating"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-red-500" />
              Team Structure
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Team size: 4 members per team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>CEK Pre-Round: ₹50 per team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Inter-College: ₹200 per participant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Maximum 25 teams allowed</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-red-500" />
              Venue Information
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Location: CEK Campus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>All facilities provided on-site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Meals and refreshments included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>High-speed internet connectivity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-black/50 border border-red-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-red-500" />
            Problem Statements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <span className="text-red-500 font-semibold">▸</span> Digital Addressing Systems
            </div>
            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <span className="text-red-500 font-semibold">▸</span> Geolocation Innovation
            </div>
            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <span className="text-red-500 font-semibold">▸</span> Logistics Solutions
            </div>
            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <span className="text-red-500 font-semibold">▸</span> E-commerce Applications
            </div>
            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <span className="text-red-500 font-semibold">▸</span> Student-Centric Services
            </div>
            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <span className="text-red-500 font-semibold">▸</span> Smart City Solutions
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="schedule"
        title="Event Schedule"
        subtitle="22 hours of intense coding and innovation"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <div className="text-red-500 font-bold text-xl mb-2">October 10, 2025</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Morning</div>
                    <div className="text-gray-400">Participant Reporting & Registration</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Inaugural Session</div>
                    <div className="text-gray-400">Opening ceremony and problem statement reveal</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Afternoon to Night</div>
                    <div className="text-gray-400">Coding Phase Begins - Build your solution</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4">
              <div className="text-red-500 font-bold text-xl mb-2">October 11, 2025</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Morning</div>
                    <div className="text-gray-400">Final coding hours and submission</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Afternoon</div>
                    <div className="text-gray-400">Project evaluation by judges</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Final Presentations</div>
                    <div className="text-gray-400">Top teams present their solutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Prize Distribution</div>
                    <div className="text-gray-400">Winners announced and closing ceremony</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
      </Section>

      <Section
        id="register"
        title="Register Now"
        subtitle="Secure your spot in Geocode Hackathon 2025"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-8 text-lg">
            Choose your registration category below. Limited spots available!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">CEK Pre-Round</h3>
              <div className="text-4xl font-bold text-red-500 mb-4">₹50</div>
              <div className="text-gray-400 mb-6">per team</div>
              <GlowButton href="https://forms.gle/j5VL1r9AodEe1jja9">
                Register CEK Team
              </GlowButton>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Inter-College</h3>
              <div className="text-4xl font-bold text-red-500 mb-4">₹800</div>
              <div className="text-gray-400 mb-6">per Team</div>
              <GlowButton href="https://forms.gle/tPsH5rP8sLD3KcMR6">
                Register Team
              </GlowButton>
            </div>
          </div>

          <div className="bg-black/50 border border-red-500/30 rounded-lg p-6 text-left">
            <h4 className="font-bold text-white mb-3">Important Notes:</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Maximum 25 teams will be accepted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Each team must have exactly 4 members</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Registration closes when spots are filled</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Confirmation will be sent via email</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        title="Get in Touch"
        subtitle="Have questions? Reach out to us"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://www.instagram.com/lance_cek"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8 text-center hover:border-red-500/60 transition-all duration-300 group"
            >
              <Instagram className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-gray-400">@lance_cek</p>
            </a>

            <a
              href="https://geocodeindia.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8 text-center hover:border-red-500/60 transition-all duration-300 group"
            >
              <Globe className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Website</h3>
              <p className="text-gray-400">geocodeindia.netlify.app</p>
            </a>

            <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8 text-center">
              <Mail className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Support</h3>
              <p className="text-gray-400">Fill the contact form on our website</p>
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative z-10 border-t border-red-500/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Geocode Hackathon. Organized by CEK Computer Science and Engineering Department.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Organized by Lance & Eallisto
          </p>
        </div>
      </footer>
    </main>
  );
}
