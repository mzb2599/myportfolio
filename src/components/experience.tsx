"use client";

import { useState, useEffect, useRef } from "react";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
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

  const experiences = [
    {
      title: "Specialist Programmer",
      company: "Infosys",
      location: "India",
      period: "June 2022 - Present",
      type: "Full-time",
      achievements: [
        "Currently, I am working on a React.js mobile-based application for the WeChat team at Apple (via Infosys), where I contribute to building and enhancing features for an international product used by millions. This role has sharpened my ability to develop high-performance applications and collaborate effectively across distributed teams",
        "Led cloud migration project from Oracle to Microsoft Azure SQL Server, resulting in 25% improvement in database performance",
        "Developed React applications with dynamic visualizations using storybook framework",
        "Created automation test cases using Microsoft Playwright framework",
        "Utilized Swagger API for automation of regular tasks like creating and updating banners",
        "Managed code development processes using Azure pipelines and GitHub",
      ],
      technologies: [
        "React",
        "Azure SQL Server",
        "Informatica PowerCenter",
        "Playwright",
        "Swagger API",
      ],
    },
    {
      title: "Software developer Intern",
      company: "Algorisys Technologies",
      location: "India",
      period: "August 2021 - April 2022",
      type: "Internship",
      achievements: [
        "Collaborated on Content Management System development using React, Semantic UI, Node.js, and PostgreSQL",
        "Implemented testing strategies using Jest and React Test Library, resulting in 20% decrease in bugs",
        "Contributed to highly interactive and responsive user interfaces",
        "Gained proficiency in MERN stack development",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Semantic UI", "Jest"],
    },
    {
      title: "Web Developer Intern",
      company: "QDS Pro",
      location: "India",
      period: "February 2021 - April 2021",
      type: "Internship",
      achievements: [
        "Currently, I am working on a React.js mobile-based application for the WeChat team at Apple (via Infosys),where I contribute to building and enhancing features for an international product used  by millions. This role has sharpened my ability to develop high-performance applications and  collaborate effectively across distributed teams",
        "Maintained and updated React-based website for Microsoft client",
        "Improved website performance and user engagement",
        "Optimized website for search engines, resulting in 15% increase in organic traffic",
        "Implemented modern web development practices for streamlined UI",
      ],
      technologies: ["React", "SEO Optimization", "Web Performance"],
    },
    {
      title: "Software Engineer Intern",
      company: "Visual Labs IT Ltd",
      location: "India",
      period: "June 2020 - August 2020",
      type: "Internship",
      achievements: [
        "Assisted in e-commerce website page design and development",
        "Participated in implementing modern web development practices",
        "Contributed to improved website speed and user interface design",
      ],
      technologies: ["Web Development", "E-commerce", "UI/UX"],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Experience List */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExperience(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeExperience === index
                          ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-l-4 border-purple-400"
                          : "bg-slate-800/50 hover:bg-slate-700/50"
                      }`}
                    >
                      <h3 className="font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 text-sm mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="text-purple-400" size={20} />
                      <h3 className="text-2xl font-bold text-white">
                        {experiences[activeExperience].title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Building size={16} />
                        {experiences[activeExperience].company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {experiences[activeExperience].location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {experiences[activeExperience].period}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experiences[activeExperience].achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <ChevronRight
                              className="text-purple-400 mt-1 flex-shrink-0"
                              size={16}
                            />
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeExperience].technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
