"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Cloud, Brain, Users } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description:
        "Builds scalable React and TypeScript products with a focus on performance, clarity, and maintainability.",
    },
    {
      icon: Users,
      title: "Product Impact",
      description:
        "Contributed mobile features for Apple's WeChat team on a product associated with approximately $2B in sales, and built an analytics dashboard used by 10,000+ people.",
    },
    {
      icon: Cloud,
      title: "Cloud & Data Modernization",
      description:
        "Led an Oracle-to-Azure SQL migration that improved query performance by 25%.",
    },
    {
      icon: Brain,
      title: "Applied Generative AI",
      description:
        "Develops LLM-powered document tools that retrieve information and answer questions over uploaded files.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a full-stack engineer at Infosys with 4+ years of experience
                shipping React and TypeScript products at scale. I build
                interfaces and systems that balance performance, clarity, and
                maintainability for real users.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I've built mobile features for Apple's WeChat team on a product
                associated with approximately $2B in sales, engineered an
                analytics dashboard used by 10,000+ people, and led an
                Oracle-to-Azure SQL migration that made queries 25% faster.
                Lately, I've been building LLM-powered tools, including a
                document analyzer that answers questions over uploaded files.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I care about fast interfaces, clear data, and code teammates
                enjoy maintaining. Based in Pune, I'm open to product teams and
                startups building impactful software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
