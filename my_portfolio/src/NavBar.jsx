function NavBar() {
  return (
    <nav className="bg-[#f5f0e8] flex justify-between items-center mt-5 px-8 py-4  sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-gray-900 transform transition-transform duration-300 hover:scale-110 cursor-default select-none">
        Mohamed Sabbar
      </h1>

      <div className="flex space-x-8 items-center">
        {['About', 'Skills', 'Projects', 'Education', 'Contact me'].map((item) => (
          <a
            key={item}
            href="#"
            className="relative text-gray-700 font-medium no-underline cursor-pointer
              transition-transform duration-300 hover:scale-110
              after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
