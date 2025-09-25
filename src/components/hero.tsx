"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "Cloud Engineer",
    "AI Enthusiast",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
                MZ
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Mohammed Zaki
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-300">
              Aliraza Bhojani
            </h2>
          </div>

          <div className="mb-8 h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-purple-400 font-medium">
              <span className="inline-block animate-pulse">{">"}</span>
              <span className="ml-2 transition-all duration-500">
                {roles[currentRole]}
              </span>
              <span className="inline-block animate-pulse ml-1">_</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Highly skilled Software Developer with expertise in cloud
            technologies, MERN Stack development, and Artificial Intelligence.
            Passionate about creating innovative solutions and staying at the
            forefront of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get In Touch
            </button>
            <button
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Ezrv2obZg6jNOzmm_Dw56qJaDyFP2QPF/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              {
                icon: Github,
                href: "https://github.com/mzb2599",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/mzakibhojani",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:mohammedzakibhojani@gmail.com",
                label: "Email",
              },
              {
                icon: ExternalLink,
                href: "https://medium.com/@mzaki2599",
                label: "Medium",
              },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-purple-600/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon
                  size={24}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
