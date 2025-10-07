import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="bg-[#f5f0e8] flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 px-6 md:px-12 py-4 ">
      {/* Logo / Nom */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 transform transition-transform duration-300 hover:scale-110 cursor-default select-none mb-2 md:mb-0">
        <Link
          to="firstarticle"
          smooth={true}
          duration={500}
          offset={-80}
        >
          Mohamed Sabbar
        </Link>
      </h1>

      {/* Liens de navigation */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center">
        {['About', 'Skills', 'Education', 'Projects', 'Contact me'].map((item) => {
          const to = item.toLowerCase().replace(/\s+/g, '-'); // ex: "Contact me" => "contact-me"

          return (
            <Link
              key={item}
              to={to}
              smooth={true}
              duration={500}
              spy={true} // met à jour le lien actif selon la section visible
              activeClass="font-bold text-black"
              offset={-80} // ajuste la position de scroll pour navbar fixe
              className="relative text-gray-700 font-medium cursor-pointer
                transition-transform duration-300 hover:scale-110
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
