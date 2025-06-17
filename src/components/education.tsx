"use client";

import { useState, useEffect, useRef } from "react";
import { GraduationCap, Award, Calendar, Star } from "lucide-react";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("education");
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

  const education = {
    degree: "Bachelor of Computer Engineering",
    institution: "University of Mumbai",
    period: "2018 - 2022",
    cgpa: "9.02",
    location: "Mumbai, India",
    achievements: [
      "Graduated with First Class with Distinction",
      "Active member of Computer Society of India (CSI)",
      "Committee Member of Programmers Club",
      "Web Developer for CSI - MHSSCE",
    ],
  };

  const certifications = [
    {
      title: "Infosys Certified Frontend React Web Developer",
      issuer: "Infosys",
      year: "2025",
      category: "Frontend Development",
      level: "Professional",
    },
    {
      title: "Infosys Certified Generative AI Developer",
      issuer: "Infosys Limited",
      year: "2023",
      category: "Artificial Intelligence",
      level: "Advanced",
    },
    {
      title: "Infosys Certified Agile Developer",
      issuer: "Infosys Limited",
      year: "2024",
      category: "Methodology",
      level: "Professional",
    },
    {
      title: "Infosys Certified Python Programmer",
      issuer: "Infosys Limited",
      year: "2023",
      category: "Programming",
      level: "Professional",
    },
    {
      title: "Infosys Certified Node Developer",
      issuer: "Infosys Limited",
      year: "2022",
      category: "Backend Development",
      level: "Professional",
    },
    {
      title: "React Developer",
      issuer: "Coursera - Hong Kong University",
      year: "2021",
      category: "Frontend Development",
      level: "Professional",
    },
    {
      title: "Bootstrap 4",
      issuer: "Coursera - Hong Kong University",
      year: "2021",
      category: "Frontend Development",
      level: "Intermediate",
    },
    {
      title: "Infosys Certified Python Associate",
      issuer: "Infosys Limited",
      year: "2022",
      category: "Programming",
      level: "Associate",
    },
    {
      title: "Infosys Certified Open Chain Practitioner",
      issuer: "Infosys Limited",
      year: "2022",
      category: "Blockchain",
      level: "Professional",
    },
    {
      title: "Infosys Certified Spark Developer",
      issuer: "Infosys Limited",
      year: "2022",
      category: "Big Data",
      level: "Professional",
    },
    {
      title: "Infosys Certified SQL Developer",
      issuer: "Infosys Limited",
      year: "2022",
      category: "Database",
      level: "Professional",
    },
  ];

  const awards = [
    {
      title: "INSTA AWARD",
      issuer: "Infosys",
      date: "November 2023",
      description:
        "Received recognition for being flexible as part of the Facets Modernization project.",
      type: "Excellence Award",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Frontend Development": "from-blue-500 to-cyan-500",
      "Backend Development": "from-green-500 to-emerald-500",
      "Artificial Intelligence": "from-purple-500 to-pink-500",
      Programming: "from-orange-500 to-red-500",
      Database: "from-indigo-500 to-purple-500",
      Methodology: "from-yellow-500 to-orange-500",
      Blockchain: "from-teal-500 to-cyan-500",
      "Big Data": "from-red-500 to-pink-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section ref={sectionRef} id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 rounded-full p-1 backdrop-blur-sm border border-slate-700/50">
              {[
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "certifications", label: "Certifications", icon: Award },
                { id: "awards", label: "Awards", icon: Star },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Education Tab */}
            {activeTab === "education" && (
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <GraduationCap size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {education.degree}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {education.institution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} className="text-purple-400" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Star size={16} className="text-purple-400" />
                        <span>CGPA: {education.cgpa}/10.0</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {education.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-purple-400 mb-2">
                          {education.cgpa}
                        </div>
                        <div className="text-gray-400">CGPA out of 10.0</div>
                        <div className="text-sm text-purple-300 mt-2">
                          First Class with Distinction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === "certifications" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(
                          cert.category
                        )} flex items-center justify-center`}
                      >
                        <Award size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-gray-400">{cert.year}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {cert.title}
                    </h3>

                    <p className="text-purple-400 text-sm mb-3">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${getCategoryColor(
                          cert.category
                        )}/20 text-white border border-current/30`}
                      >
                        {cert.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Awards Tab */}
            {activeTab === "awards" && (
              <div className="max-w-2xl mx-auto">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">
                            {award.title}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {award.date}
                          </span>
                        </div>
                        <p className="text-yellow-400 font-medium mb-3">
                          {award.issuer}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {award.description}
                        </p>
                        <div className="mt-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
                            {award.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
