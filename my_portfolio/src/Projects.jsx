import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Projects() {
  const projects = [
    {
      title: "Stock Management Application",
      img: "/pictures/stock_management.jpg",
      description:
        "A comprehensive web application that allows businesses to manage their inventory efficiently and centrally...",
      tools: ["Spring Boot", "MySQL", "React Js"],
    },
    {
      title: "Real-Time Log Processing Pipeline",
      img: "/pictures/architecture.png",
      description:
        "The goal is to build a distributed pipeline capable of collecting logs from different sources...",
      tools: ["Python", "Java", "Docker", "Apache Kafka", "Apache Spark", "React Js"],
    },
    {
      title: "ML Fantasy",
      img: "/pictures/fantasy_project.png",
      description:
        "Develop a machine learning model capable of predicting the points a Premier League player is likely to score...",
      tools: ["Python", "Flask", "Scikit-learn", "Pandas"],
    },
    {
      title: "Linux Distribution",
      img: "/pictures/dis.png",
      description:
        "Building a custom Linux distribution to understand filesystem architecture, boot process, and system administration...",
      tools: ["Python", "Shell", "Cubic", "Linux"],
    },
    {
      title: "ETL Reddit datapipeline",
      img: "/pictures/reddit.png",
      description:
        "Build an ETL pipeline to collect near-real-time data from Reddit, transform it, and store it in a database...",
      tools: ["Python", "Docker", "Apache Airflow", "Postgres"],
    },
    {
      title: "AI-Generative-Agentic",
      img: "/pictures/ia_agentic.png",
      description:
        "Build an agentic and intelligent system capable of generating technical diagrams (UML, C4, Mindmaps) with multiple collaborating agents.",
      tools: ["Python", "Flask", "LangChain", "LangGraph", "ReactJS"],
    },
  ];

  return (
    
    
    <div className="py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <p className="text-4xl font-bold text-gray-800">Projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // animation une seule fois
            threshold: 0.5,    // 50% visible pour déclencher
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`border border-black shadow-md p-6 transition transform hover:shadow-xl hover:scale-105 opacity-0 ${
                inView ? "animate__animated animate__fadeInUp opacity-100" : ""
              }`}
              style={{ animationDuration: "1.5s" }} // rend l'animation plus lente
            >
              <p className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</p>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

              <h2 className="text-xl font-semibold mb-2">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="border border-black bg-gray-200 px-3 py-1">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
