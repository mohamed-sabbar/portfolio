import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function FirstArticle() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,    
  });

  const fullText = `HHello, I'm Mohamed Sabbar,
a Data and Software Engineering student,
and this is my portfolio.`;

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  function ScrollDown() {
    window.scrollBy({
      top: 650,
      behavior: 'smooth',
    });
  }

  return (
    <section
      ref={ref}
      className={`py-12 md:py-24 px-6 md:px-20 opacity-0 ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
      style={{ animationDuration: '1.5s' }}
    >
      <div className="max-w-3xl mx-auto text-center md:text-left">
        {/* Typewriting Text */}
        <pre className="text-3xl sm:text-4xl md:text-5xl font-mono text-gray-900 whitespace-pre-line leading-relaxed">
          {displayedText}
          <span className="border-r-4 border-black animate-blink inline-block h-10 align-middle"></span>
        </pre>

        {/* View Projects Link */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-xl sm:text-2xl text-blue-600 no-underline mt-6 inline-block cursor-pointer hover:text-blue-800 transition-colors duration-300"
        >
          View Projects
        </Link>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/mohamed-sabbar-463495294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/mohamed-sabbar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/github.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        {/* Scroll Down */}
        <div
          className="group flex items-center justify-center md:justify-start space-x-3 mt-12 cursor-pointer"
          onClick={ScrollDown}
        >
          <img src="/pictures/mouse.png" className="w-8 h-8" alt="Mouse Icon" />
          <h1 className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Scroll down
          </h1>
          <img
            src="/pictures/down.png"
            className="w-8 h-8 transition-all duration-300 transform group-hover:translate-y-2"
            alt="Down Arrow"
          />
        </div>
      </div>
    </section>
  );
}
