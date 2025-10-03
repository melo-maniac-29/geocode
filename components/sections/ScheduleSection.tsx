import Section from "@/components/Section";
import { Clock } from "lucide-react";

export default function ScheduleSection() {
  return (
    <Section
      id="schedule"
      title="Event Schedule"
      subtitle="22 hours of intense coding and innovation + 3.5 hours of presentations"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6 py-4">
            <div className="text-red-500 font-bold text-xl mb-2">October 10, 2025 (Friday)</div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">2:00 PM</div>
                  <div className="text-gray-400">Participant Reporting & Registration</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">2:00 PM - Coding Phase Begins</div>
                  <div className="text-gray-400">Opening ceremony, problem statement reveal, and start of 22-hour coding marathon</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 pl-6 py-4">
            <div className="text-red-500 font-bold text-xl mb-2">October 11, 2025 (Saturday)</div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">12:00 PM - Coding Phase Ends</div>
                  <div className="text-gray-400">Final submission deadline (22 hours completed)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">12:00 PM - 3:30 PM</div>
                  <div className="text-gray-400">Evaluation & Presentations by teams</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">3:30 PM onwards</div>
                  <div className="text-gray-400">Prize Distribution & Closing Ceremony</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-500" />
            Event Highlights
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span><strong>22-Hour Coding Hackathon</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span><strong>3.5-Hour Presentations</strong></span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span>Industry Experts as Judges</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">▸</span>
                <span>Eallisto Representatives</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}