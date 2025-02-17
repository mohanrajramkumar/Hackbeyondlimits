import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 py-16">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-black to-black opacity-90" />

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto sm:px-12 lg:px-24 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wide">
              {"<HackBeyondLimit$>"}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Go Beyond. Hack Beyond.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://x.com/HackBeyondLimit?t=oNeNo1VyEqLgt9Cv-_YwuQ&s=09"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
              >
                <Twitter className="w-8 h-8" />
              </a>

              <a
                href="https://github.com/HackBeyondLimits"
                aria-label="Visit our GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
              >
                <Github className="w-8 h-8" />
              </a>

              <a
                href="https://www.linkedin.com/showcase/hack-beyond-limits/"
                aria-label="Connect with us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>

              <a
                href="mailto:techhub@rathinam.in"
                aria-label="Send us an email"
                className="text-gray-400 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span>Rathinam College Of Arts And Science</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <a
                  href="mailto:techhub@rathinam.in"
                  className="hover:underline"
                >
                  techhub@rathinam.in
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <a href="tel:+916374060864" className="hover:underline">
                  +91 63740 60864
                </a>
              </li>
            </ul>
          </div>

          {/* Email and Query Form */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">
              Drop Us a Query
            </h4>
            <form className="space-y-4">
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-800 text-gray-300 rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                aria-label="Enter your email"
              />

              <label htmlFor="query" className="sr-only">
                Your Query
              </label>
              <textarea
                id="query"
                rows={4}
                placeholder="Your Query"
                required
                className="w-full p-3 bg-gray-800 text-gray-300 rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                aria-label="Enter your query"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8">
        <div className="h-0.5 bg-gradient-to-r from-purple-500 via-transparent to-purple-500"></div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 py-4">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          &copy; {new Date().getFullYear()} HACK_BEYOND_LIMIT$. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
