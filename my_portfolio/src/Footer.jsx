export default function Footer() {
  return (
    <footer className="  py-12">
      
      <div className="w-full h-px bg-black dark:bg-gray-400 mx-auto mb-8"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
       
        <p className="text-3xl font-light tracking-wide">
         Mohamed Sabbar
        </p>

        
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>

        
        <div className="flex space-x-6">
          <a
            href="mailto:tonemail@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
