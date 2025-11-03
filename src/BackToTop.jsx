import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-3 rounded-full bg-gradient-to-br from-indigo-700 via-blue-500 to-blue-300 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-blue-300/50 transition-all duration-300 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} z-50`}
      aria-label="Back to top"
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default BackToTop;