"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: "Customer Insights Dashboard",
      repo: "https://github.com/mzb2599/5s-Auto",
      description:
        "Business intelligence dashboard for customer operations, reporting, and data-driven workflow management.",
      longDescription:
        "Developed a data-heavy operational dashboard with interactive charts, reporting workflows, map-based insights, and export features for business users. The app is built around reusable React components and scalable frontend architecture for enterprise reporting use cases.",
      technologies: [
        "React.js",
        "React Router",
        "Material UI",
        "ECharts",
        "React Leaflet",
        "jsPDF",
        "Node.js",
      ],
      features: [
        "Interactive dashboards and chart-based reporting",
        "Map and Geospatial visualization for operational data",
        "PDF, CSV, and document export workflows",
        "Reusable component-driven frontend architecture",
        "Date-based management and business data filters",
      ],
      status: "In Production",
      period: "2024 - Present",
    },
    {
      title: "Document Intelligence Dashboard",
      repo: "https://github.com/mzb2599/Nahjul-Balagha",
      description:
        "LLM Document Analyzer for uploading files and asking questions in plain English with grounded answers from source content.",
      longDescription:
        "Built a document intelligence workflow where users upload files, search relevant sections, and receive answers grounded in the original content. The app uses chunking, retrieval, and LLM-based prompting to keep responses relevant while designing for large documents and failure cases like incomplete or ambiguous answers.",
      technologies: [
        "React.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "RAG",
        "Qdrant",
        "Gemini API",
      ],
      features: [
        "Upload-and-query document workflow",
        "Chunking and retrieval for grounded answers",
        "Source-cited question answering over long documents",
        "Prompt design and failure handling for hallucination risk",
        "Responsive UI focused on fast exploration and trust",
      ],
      status: "Completed",
      period: "2025",
    },
    {
      title: "Choice",
      repo: "https://github.com/mzb2599/Choice",
      description:
        "Retail and customer management app with product workflows, bulk updates, and improved mobile usability.",
      longDescription:
        "Designed and built a full customer/product management workflow for retail operations using React Native, Expo, and an Express + MongoDB backend. The app includes customer handling, product updates, reset flows, and UX refinements focused on smoother day-to-day operations.",
      technologies: [
        "React Native",
        "Expo",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "Node.js",
      ],
      features: [
        "Customer and product management workflows",
        "Bulk update and backend sync features",
        "Responsive mobile-first user experience",
        "Password reset and auth-related flows",
        "Improved empty states and input handling",
      ],
      status: "Completed",
      period: "2023 - 2024",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Selected work spanning enterprise dashboards, AI-powered search,
              and product-focused applications built for real-world use.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {project.period}
                        </div>
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            project.status === "In Production"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {hoveredProject === index
                      ? project.longDescription
                      : project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features - Show on hover */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      hoveredProject === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-xs text-gray-400 flex items-center gap-2"
                        >
                          <Zap size={12} className="text-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
