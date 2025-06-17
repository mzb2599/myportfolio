"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, Calendar, Zap } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Customer Insights Dashboard",
      description:
        "Comprehensive dashboard for managing customer and order data with advanced analytics and reporting features.",
      longDescription:
        "Developed and maintained a comprehensive customer insights dashboard to manage customer and order data efficiently. Implemented functionalities such as adding, updating, and filtering customer data, and locking customers based on credit limits.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Chart.js", "Express.js"],
      features: [
        "Real-time customer data management",
        "Advanced filtering and search capabilities",
        "Credit limit monitoring and alerts",
        "Monthly/ad-hoc reporting system",
        "Email notification integration",
      ],
      metrics: {
        users: "500+",
        performance: "40% faster",
        accuracy: "99.5%",
      },
      status: "In Production",
      period: "July 2024 - Present",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Modern chat application with real-time messaging, user authentication, and seamless communication features.",
      longDescription:
        "Developed a real-time chat application using React.js, chatengine.io, and Firebase for authentication. Enabled seamless communication between users, resulting in a 40% increase in user engagement.",
      technologies: ["React.js", "Firebase", "ChatEngine.io", "WebSocket", "CSS3"],
      features: [
        "Real-time messaging",
        "User authentication with Firebase",
        "Group chat functionality",
        "Message history and search",
        "Responsive design for all devices",
      ],
      metrics: {
        users: "1000+",
        engagement: "+40%",
        uptime: "99.9%",
      },
      status: "Completed",
      period: "2023",
    },
    {
      title: "Face Mask Detection System",
      description:
        "AI-powered real-time face mask detection system with email automation for public health and safety.",
      longDescription:
        "Developed a real-time face mask detection system using the Mobilenet V2 model and ReLU activation function. Pre-processed a dataset of people wearing and not wearing masks, leading to a 95% accuracy rate.",
      technologies: ["Python", "TensorFlow", "OpenCV", "MobileNet V2", "SMTP"],
      features: [
        "95% accuracy in face mask detection",
        "Real-time video processing",
        "Automated email alerts for violations",
        "Dataset preprocessing and training",
        "Integration with security systems",
      ],
      metrics: {
        accuracy: "95%",
        speed: "Real-time",
        alerts: "Automated",
      },
      status: "Completed",
      period: "2021",
    },
    {
      title: "Python Search Assistant",
      description:
        "Intelligent search assistant with voice recognition and API integration for enhanced user experience.",
      longDescription:
        "Created a Python script with default and voice typing features for enhanced user experience. Integrated Wolfram Alpha and Wikipedia APIs to provide concise and informative summaries on any topic.",
      technologies: ["Python", "Speech Recognition", "Wolfram Alpha API", "Wikipedia API", "NLP"],
      features: [
        "Voice command recognition",
        "Text and voice input support",
        "Wolfram Alpha integration",
        "Wikipedia API integration",
        "Intelligent search optimization",
      ],
      metrics: {
        efficiency: "+30%",
        accuracy: "90%",
        response: "<2s",
      },
      status: "Completed",
      period: "2022",
    },
  ]

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
              A showcase of my recent work, demonstrating expertise in full-stack development, AI/ML, and cloud
              technologies.
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
                      <button className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors duration-300">
                        <Github size={16} />
                      </button>
                      <button className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors duration-300">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {hoveredProject === index ? project.longDescription : project.description}
                  </p>
                </div>

                {/* Project Metrics */}
                <div className="px-6 py-4 bg-slate-900/30">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
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
                      hoveredProject === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center gap-2">
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
  )
}
