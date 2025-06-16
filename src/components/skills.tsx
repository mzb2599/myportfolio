"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Code, Server, Cloud, Database, Wrench, Brain } from "lucide-react";
import type { ProportionsIcon as IconProps } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, experience: "3+ years" },
        { name: "HTML/CSS", level: 90, experience: "4+ years" },
        { name: "JavaScript/TypeScript", level: 88, experience: "3+ years" },
        { name: "Semantic UI", level: 85, experience: "2+ years" },
        { name: "Bootstrap", level: 82, experience: "3+ years" },
        { name: "React Test Library", level: 80, experience: "2+ years" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, experience: "3+ years" },
        { name: "Express.js", level: 88, experience: "3+ years" },
        { name: "Python", level: 85, experience: "3+ years" },
        { name: "REST APIs", level: 87, experience: "3+ years" },
        { name: "GraphQL", level: 75, experience: "1+ years" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 88, experience: "3+ years" },
        { name: "MongoDB", level: 82, experience: "2+ years" },
        { name: "Azure SQL Server", level: 85, experience: "2+ years" },
        { name: "Oracle", level: 78, experience: "2+ years" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Microsoft Azure", level: 90, experience: "2+ years" },
        { name: "Azure Pipelines", level: 85, experience: "2+ years" },
        { name: "GitHub Actions", level: 80, experience: "2+ years" },
        { name: "Docker", level: 75, experience: "1+ years" },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Informatica PowerCenter", level: 88, experience: "2+ years" },
        { name: "Playwright", level: 82, experience: "1+ years" },
        { name: "Jest", level: 85, experience: "2+ years" },
        { name: "Swagger API", level: 80, experience: "2+ years" },
        { name: "Git/GitHub", level: 90, experience: "4+ years" },
      ],
    },
    {
      title: "AI & ML",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "TensorFlow", level: 80, experience: "2+ years" },
        { name: "OpenCV", level: 78, experience: "2+ years" },
        { name: "Prompt Engineering", level: 85, experience: "1+ years" },
        { name: "Machine Learning", level: 75, experience: "2+ years" },
      ],
    },
  ];

  const ActiveCategoryIcon = skillCategories[activeCategory].icon;

  const IconWithSize = ({
    icon,
    size,
  }: {
    icon: React.FC<IconProps>;
    size: number;
  }) => {
    return <icon size={size} />;
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels across various technologies.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  <IconWithSize icon={category.icon} size={20} />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Skills Display */}
            <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center`}
                >
                  <ActiveCategoryIcon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title} Skills
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group transition-all duration-500 ${
                      isVisible ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">
                          {skill.experience}
                        </span>
                        <span className="text-sm font-bold text-purple-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-800/30 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  15+
                </div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-xl">
                <div className="text-3xl font-bold text-pink-400 mb-2">4+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
