import Section from "@/components/Section";
import { Users, MapPin, Target } from "lucide-react";

export default function EventDetailsSection() {
  return (
    <Section
      id="details"
      title="Event Details"
      subtitle="Everything you need to know about participating"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-red-500" />
            Participation Structure
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong>Total Teams in Main Hackathon:</strong> 25</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong>20 Teams from Outside Colleges</strong> (Direct Entry)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong>5 Teams from CEK</strong> – Selected via Prelims</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-red-500/20">
            <h4 className="text-lg font-semibold text-white mb-3">Registration Fees:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>CEK Students (Prelims): <strong>₹50 per team</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>Outside Colleges: <strong>₹800 per team</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <MapPin className="w-6 h-6 text-red-500" />
            Venue Information
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span>Location: College of Engineering Kidangoor Campus</span>
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
          About Digipin
        </h3>
        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4">
            Digipin is an innovative digital platform developed collaboratively by the <strong>Indian Postal Service</strong> and <strong>IIT Hyderabad</strong>. It provides secure, verifiable digital identities and documentation solutions for individuals and businesses, ensuring seamless and trustworthy interactions online.
          </p>
          <p className="mb-4">
            Digipin also offers a robust API service through <a href="https://digipin.dev" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-semibold">digipin.dev</a>, enabling developers to integrate its secure verification and identity management features into their applications.
          </p>
          <p>
            Designed with reliability, scalability, and security in mind, Digipin is a step forward in building a trusted digital ecosystem in India.
          </p>
          <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
            <p className="text-center text-red-400 font-semibold">
              📋 Problem statements will be provided soon
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}