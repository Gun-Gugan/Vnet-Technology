import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
  return (
    <section className="container mx-auto py-20 my-20 px-4 sm:px-6 animate-fade-in" data-wow-delay=".3s">
      <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-8 rounded-xl shadow-xl border border-gray-200/50 max-w-lg mx-auto text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent rounded-xl pointer-events-none"></div>
        <div className="relative flex flex-col items-center">
          <FiAlertTriangle
            className="text-blue-600 text-8xl mb-4 mx-auto"
            aria-label="Warning icon"
          />
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white py-3 px-5 rounded-full hover:bg-blue-700 transition"
          >
            Go Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;