import { useEffect, useState } from 'react';

export default function FirstArcticle() {
  const fullText = `Heello, I'm Mohamed Sabbar,
a Data and Software Engineering student,
and this is my portfolio.`;

function ScrollDown(){
  window.scrollBy({
    top:650,
    behavior:'smooth'
  })
}

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

  return (
    <div className="mt-24 ml-28">
      <pre className="text-4xl font-mono text-black whitespace-pre-line leading-relaxed">
        {displayedText}
        <span className="border-r-4 border-black animate-blink inline-block h-10 align-middle"></span>
      </pre>

      <a href="#" className="text-xl text-blue-600 no-underline mt-4 inline-block">
        View Projects
      </a>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/ton-profil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pictures/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/ton-utilisateur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pictures/github.png" alt="GitHub" className="w-8 h-8" />
        </a>
      </div>

      <div className="group flex items-center space-x-3 mt-16 mr-10 cursor-pointer" onClick={ScrollDown}>
  <img src="/pictures/mouse.png" className="w-8 h-8" alt="Mouse Icon" />
  <h1 className="text-lg text-gray-700 group-hover:text-black transition-colors duration-300">
    Scroll down
  </h1>
  <img
    src="/pictures/down.png"
    className="w-8 h-8 transition-all duration-300 transform group-hover:translate-y-2"
    alt="Down Arrow" 
  />
</div>

    </div>
  );
}
