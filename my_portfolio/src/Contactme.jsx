import { useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import 'animate.css';

function Contactme() {
  const [isHovered, setIsHovered] = useState(false);
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { ref, inView } = useInView({
    triggerOnce: true, // animation seulement la première fois
    threshold: 0.5,    // 50% visible pour déclencher
  });

  const changeForum = (e) => {
    SetFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_vrkshyg",
      "template_5y19un2",
      FormData,
      "Bmxk0NUJr0I8RA29r"
    )
    .then(() => {
      alert("Message envoyé avec succès !");
    })
    .catch((err) => {
      console.error(err);
      alert(err);
    });
  };

  return (
    <div
      ref={ref}
      className={`py-20 px-6 md:px-20 bg-[#f5f0e8] min-h-screen transition-opacity duration-1000 ${
        inView ? "animate__animated animate__fadeInUp opacity-100" : "opacity-0"
      }`}
      style={{ animationDuration: '1.5s' }} // ralentit un peu l'animation
    >
      <form className="max-w-6xl mx-auto rounded-2xl p-10 flex flex-col md:flex-row gap-12">
        <div className="flex-1 items-center space-y-8">
          <div className="flex flex-col ml-96">
            <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
            <h2 className="text-lg text-gray-500 ml-12">Get in touch</h2>
          </div>

          <div className="flex">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <img className="w-10 h-10" src="/pictures/mail.png" alt="Email icon" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">Mohamedazrou2003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img className="w-10 h-10" src="/pictures/telephone.png" alt="Phone icon" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">0638647661</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img className="w-10 h-10" src="/pictures/location.png" alt="Location icon" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Agadir | Al Hoceima, Morocco</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-2">Social</p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/mohamed-sabbar-463495294/" target="_blank" rel="noopener noreferrer">
                    <img className="w-10 h-10 hover:scale-110 transition-transform" src="/pictures/linkedin.png" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/mohamed-sabbar" target="_blank" rel="noopener noreferrer">
                    <img className="w-10 h-10 hover:scale-110 transition-transform" src="/pictures/github.png" alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 ml-44 space-y-6">
              <div className="border border-black px-4 py-3 w-full">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent placeholder:text-gray-400 outline-none"
                  aria-label="Your name"
                  name="name"
                  value={FormData.name}
                  onChange={changeForum}
                />
              </div>

              <div className="border border-black px-4 py-3 w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent placeholder:text-gray-400 outline-none"
                  aria-label="Your email"
                  name="email"
                  value={FormData.email}
                  onChange={changeForum}
                />
              </div>

              <div className="border border-black px-4 py-3 w-full">
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full bg-transparent placeholder:text-gray-400 outline-none resize-none"
                  aria-label="Your message"
                  name="message"
                  value={FormData.message}
                  onChange={changeForum}
                ></textarea>
              </div>

              <button
                type="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-black text-black font-semibold transition duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105"
                onClick={handleClick}
              >
                <img
                  src={isHovered ? "/pictures/send_white.png" : "/pictures/send.png"}
                  alt="Send"
                  className="w-5 h-5"
                />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contactme;
