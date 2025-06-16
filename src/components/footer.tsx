"use client";

import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mzb2599",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mzakibhojani",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:mohammedzakibhojani@gmail.com",
      label: "Email",
      color: "hover:text-purple-400",
    },
    {
      icon: ExternalLink,
      href: "https://medium.com/@mzaki2599",
      label: "Medium",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MZ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mohammed Zaki</h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating innovative solutions with modern
              technologies. Specializing in React, Node.js, and cloud
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                mohammedzakibhojani@gmail.com
              </p>
              <p className="text-gray-400 text-sm">+91 8879116493</p>
              <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
            </div>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-slate-800/50 text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Mohammed Zaki Aliraza Bhojani. Made with
              <Heart size={14} className="text-red-400 fill-current" />
              using React & Next.js
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
