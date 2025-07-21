export default function Contactme() {
  return (
    <div className=" py-16 px-6 md:px-20">
      <form method="POST" className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
          <h2 className="text-lg text-gray-600">Get in touch</h2>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-start space-x-4">
            <img className="w-10 h-10" src="/pictures/mail.png" alt="Email icon" />
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">Mohamedazrou2003@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img className="w-10 h-10" src="/pictures/telephone.png" alt="Phone icon" />
            <div>
              <p className="font-semibold text-gray-800">Phone number</p>
              <p className="text-gray-600">0638647661</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img className="w-10 h-10" src="/pictures/location.png" alt="Location icon" />
            <div>
              <p className="font-semibold text-gray-800">Location</p>
              <p className="text-gray-600">Agadir | Al Hoceima, Morocco</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-2">Social</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src="/pictures/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src="/pictures/github.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

      
         <div className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your message"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div> 
      </form>
    </div>
  );
}
