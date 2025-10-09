import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animation une seule fois
    threshold: 0.2,    // 20% visible pour déclencher
  });

  const skillData = [
    {
      title: 'Languages',
      icon: '/pictures/coding.png',
      items: ['Java', 'Python', 'JavaScript', 'Shell (basic notations)', 'SQL/PL SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks',
      icon: '/pictures/frameworks.png',
      items: ['Flask', 'JEE(Spring, Spring Boot)', 'Tailwind CSS', 'React JS','LangChain'],
    },
    {
      title: 'Big Data',
      icon: '/pictures/big-data.png',
      items: ['Apache Kafka', 'Apache Spark', 'Elasticsearch', 'Apache Hadoop', 'Apache Airflow'],
    },
    {
      title: 'Artificial Intelligence',
      icon: '/pictures/artificial-intelligence.png',
      items: ['Machine Learning', 'Deep Learning', 'NLP'],
    },
    {
      title: 'DevOps',
      icon: '/pictures/devops.png',
      items: ['Git', 'GitHub', 'Docker'],
    },
    {
      title: 'Databases',
      icon: '/pictures/database.png',
      items: ['Oracle', 'MongoDB', 'MySQL', 'PostgreSQL'],
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-12 px-6 
        ${inView ? 'animate__animated animate__fadeInUp animate__slow' : 'opacity-0'}`}
      style={{ animationDuration: '1.5s' }} // tu peux augmenter la durée pour ralentir
    >
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Skills</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {skillData.map((category, idx) => (
          <div
            key={idx}
            className="w-72 border border-black rounded-2xl shadow-lg p-6 transition-transform duration-500 transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <img src={category.icon} alt={category.title} width="80" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">{category.title}</h2>
            <ul className="list-disc list-inside text-gray-700">
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
