import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaServer,
  FaNetworkWired,
  FaLaptop,
  FaCheck,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpenMobile, setIsServiceOpenMobile] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/trending" },
    { name: "Cart", path: "/cart" },
  ];

  const serviceLinks = [
    { name: "EndPoint Security", path: "/endpoint", icon: <FaHome className="text-blue-500" /> },
    { name: "Cloud - AWS/Azure", path: "/cloud", icon: <FaServer className="text-blue-500" /> },
    { name: "UI/UX Design", path: "/uiux", icon: <FaLaptop className="text-blue-500" /> },
    { name: "Website", path: "/website", icon: <FaHome className="text-blue-500" /> },
    { name: "Network Services", path: "/network", icon: <FaNetworkWired className="text-blue-500" /> },
    { name: "CCTV & Biometric", path: "/cctv", icon: <FaCheck className="text-blue-500" /> },
    { name: "All Services", path: "/service", icon: <FaCheck className="text-blue-500" /> },
    { name: "Social Media Marketing", path: "/social", icon: <FaInstagram className="text-blue-500" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors"
        >
          V-NET
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {name}
            </Link>
          ))}

          {/* Desktop Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
              aria-haspopup="true"
            >
              Services
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <ul className="absolute top-10 right-0 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {serviceLinks.map(({ name, path, icon }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition text-sm"
                  >
                    <span className="mr-3">{icon}</span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-4 py-3 space-y-2 font-medium">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}

            {/* Mobile Services Accordion */}
            <li>
              <button
                onClick={() => setIsServiceOpenMobile(!isServiceOpenMobile)}
                className="w-full flex justify-between items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors focus:outline-none"
              >
                Services
                {isServiceOpenMobile ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isServiceOpenMobile && (
                <ul className="mt-2 ml-4 bg-gray-50 rounded-lg p-2 space-y-1">
                  {serviceLinks.map(({ name, path, icon }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServiceOpenMobile(false);
                        }}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        <span className="mr-2">{icon}</span>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;