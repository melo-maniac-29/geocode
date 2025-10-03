import Section from "@/components/Section";
import GlowButton from "@/components/GlowButton";

export default function RegistrationSection() {
  return (
    <Section
      id="register"
      title="Register Now"
      subtitle="Secure your spot in Geocode Hackathon 2025"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-300 mb-8 text-lg">
          Choose your registration category below. Limited spots available - first-come, first-serve basis!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">CEK Students (Prelims)</h3>
            <div className="text-4xl font-bold text-red-500 mb-2">₹50</div>
            <div className="text-gray-400 mb-4">per team</div>
            <div className="text-sm text-gray-300 mb-6">
              <p>• Open to all CEK students</p>
              <p>• <strong>Top 5 teams qualify</strong> for main hackathon</p>
            </div>
            <GlowButton href="https://forms.gle/j5VL1r9AodEe1jja9">
              Register CEK Team
            </GlowButton>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Outside Colleges</h3>
            <div className="text-4xl font-bold text-red-500 mb-2">₹800</div>
            <div className="text-gray-400 mb-4">per team</div>
            <div className="text-sm text-gray-300 mb-6">
              <p>• Direct entry to main hackathon</p>
              <p>• Limited to <strong>20 teams</strong></p>
            </div>
            <GlowButton href="https://forms.gle/tPsH5rP8sLD3KcMR6">
              Register Team
            </GlowButton>
          </div>
        </div>

        <div className="bg-black/50 border border-red-500/30 rounded-lg p-6 text-left">
          <h4 className="font-bold text-white mb-3">Important Registration Notes:</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span>Total teams in main hackathon: <strong>25 teams</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span>Each team must have <strong>3-4 members</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span>Registration closes when spots are filled</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span>Confirmation will be sent via email</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">▸</span>
              <span>Outside colleges: First-come, first-serve basis</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}