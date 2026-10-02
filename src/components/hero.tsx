"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "React & TypeScript Engineer",
    "MERN Stack Developer",
    "Generative AI Engineer",
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
      className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative order-2 mx-auto w-full max-w-sm md:order-2">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple-500/30 via-fuchsia-500/10 to-pink-500/30 blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900 shadow-2xl shadow-purple-950/40 md:aspect-[6/7]">
              <img
                src={`${import.meta.env.BASE_URL}image.jpg`}
                alt="Mohammed Zaki Bhojani"
                className="h-full w-full object-cover object-center"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = `${import.meta.env.BASE_URL}profile.svg`;
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-950/45 to-transparent" />
            </div>
          </div>

          <div className="order-1 text-center md:order-1 md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              Full-stack engineer
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Mohammed Zaki
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Aliraza Bhojani
              </span>
            </h1>
            <h2 className="mb-6 text-xl font-light text-gray-300 sm:text-2xl">
              Full Stack Developer
            </h2>

            <div className="mb-6 min-h-10">
              <p className="text-lg font-medium text-purple-300 sm:text-xl">
                <span className="inline-block animate-pulse">{">"}</span>
                <span className="ml-2 transition-all duration-500">
                  {roles[currentRole]}
                </span>
                <span className="inline-block animate-pulse ml-1">_</span>
              </p>
            </div>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-300 md:mx-0 md:text-lg">
              I'm a full-stack engineer at Infosys with 4+ years of experience
              building React and TypeScript products at scale. I turn complex
              workflows into fast, reliable applications that are clear and easy
              to use.
            </p>

            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
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
                    "_blank",
                  )
                }
              >
                Download Resume
              </button>
            </div>

            <div className="flex justify-center space-x-5 md:justify-start">
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
