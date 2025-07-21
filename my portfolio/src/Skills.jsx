import React from 'react';

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div>
        <img src="/pictures/coding.png"  alt="Coding" width="200" />
        <p>Languages</p>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Shell (basic notations)</li>
          <li>SQL/PL SQl</li>
          <li>HTML</li>
          <li>CSS3</li>

        </ul>
      </div>
      <div>
        <p>Frameworks</p>
        <img src='/pictures/frameworks.png' />
        <ul>
            <li>Flask</li>
            <li>JEE(Spring,Spring boot)</li>
            <li>Tailwind CSS</li>
            <li>React JS</li>
        </ul> 
        </div>
        <div>
            <p>Big Data</p>
            <img src='/pictures/big-data.png'/>
            <ul>
                <li>Apache Kafka</li>
                <li>Apache Spark</li>
                <li>Apache Spark</li>
                <li>Apache Hadoop</li>
                <li>Apache Airflow</li>
                
            </ul>
        </div>
        <div>
            <p>Artificial Intelligence</p>
            <img src ='/pictures/artificial-intelligence.png'/>
            <ul>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>NLP</li>
                  </ul>
        </div>
    </div>
  );
}
