import Section from "@/components/Section";
import { Mail, Instagram, Globe } from "lucide-react";

export default function ContactSection() {
  return (
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
            href="https://geocodeindia.vercel.app"
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
  );
}