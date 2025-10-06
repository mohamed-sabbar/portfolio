import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="bg-[#f5f0e8] flex justify-between items-center mt-5 px-8 py-4 sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-gray-900 transform transition-transform duration-300 hover:scale-110 cursor-default select-none">
        <Link 
        
          to="firstarticle"
          smooth={true}
        duration={500}
        offset={-80}
        
        >
        Mohamed Sabbar
        </Link>
        
      </h1>

      <div className="flex space-x-8 items-center">
        {['About', 'Skills','Education', 'Projects',  'Contact me'].map((item) => {
          const to = item.toLowerCase().replace(/\s+/g, '-'); // ex: "contact me" => "contact-me"
          

          return (
            <Link
              key={item}
              to={to}
              smooth={true}
              duration={500}
              className="relative text-gray-700 font-medium no-underline cursor-pointer
                transition-transform duration-300 hover:scale-110
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              spy={true}    // met à jour le lien actif selon la section visible (optionnel)
              activeClass="font-bold text-black" // style quand actif (optionnel)
              offset={-80}  // optionnel, pour ajuster la position de scroll (ex: hauteur navbar)
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
