import React from 'react';

export default function Aboutme() {
  return (
    <section id="about" className="about-section py-16 px-4">
  
      <div className="mt-24 w-px h-10 bg-black mx-auto"></div>

    
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      </div>

     
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto px-6">
        <img
          src="/pictures/me.jpg"
          alt="Me"
          className="w-72 h-72 rounded-full border border-black shadow-lg object-cover mr-16"
        />

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl ">
          Hello! I'm <strong>Mohamed Sabbar</strong>, a passionate and versatile <strong>Data Engineer</strong> and <strong>Software Engineer</strong>. I specialize in building robust data pipelines, designing scalable backend systems, and creating efficient software solutions. <br /><br />
          With a strong background in data processing, cloud technologies, and software development, I enjoy turning complex problems into clean, elegant, and performant code. I’ve worked on real-time data streaming pipelines, ETL systems, microservices architectures, and web applications. <br /><br />
          I'm always eager to learn new technologies, collaborate with others, and build impactful projects that solve real-world problems.

<input
  type="button"
  value="Get the Resume"
  className="mt-6  px-6 py-2 rounded-3xl border border-black text-black font-semibold transition duration-300 ease-in-out hover:bg-black hover:text-white"
/>
        </p>
        
       
      </div>
    </section>
  );
}
