"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Cloud, Brain, Users } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in MERN stack with proven track record in building scalable applications",
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "Specialized in Microsoft Azure with hands-on experience in cloud migration projects",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about AI-driven automation and prompt engineering solutions",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Strong collaborative skills with experience leading development teams",
    },
  ]

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
                I'm a passionate Software Developer based in Pune, Maharashtra, with a strong foundation in modern web
                technologies and cloud computing. Currently working as a Specialist Programmer at Infosys, I bring
                innovative solutions to complex technical challenges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology spans across full-stack development, cloud migration projects, and AI-driven
                applications. I'm particularly excited about the intersection of artificial intelligence and web
                development, constantly exploring new ways to enhance user experiences through intelligent automation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles on
                Medium, or exploring the latest trends in machine learning and cloud technologies.
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
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
