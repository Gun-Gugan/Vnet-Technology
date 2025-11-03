import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about/about-1.jpg";

const About = () => {
  // Facts data
  const facts = [
    { number: 99, text: "Success in getting happy customers" },
    { number: 25, text: "Thousands of successful business" },
    { number: 120, text: "Clients who love HighTech" },
    { number: 5, text: "Star reviews from satisfied clients" },
  ];

  // State to hold animated numbers
  const [animatedNumbers, setAnimatedNumbers] = useState(
    facts.map(() => 0)
  );

  useEffect(() => {
    const intervals = facts.map((fact, index) => {
      const increment = fact.number / 100;
      return setInterval(() => {
        setAnimatedNumbers((prev) => {
          const newNumbers = [...prev];
          if (newNumbers[index] < fact.number) {
            newNumbers[index] = Math.min(
              newNumbers[index] + increment,
              fact.number
            );
          }
          return newNumbers;
        });
      }, 20); // speed of increment
    });

    // Cleanup intervals on unmount
    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white text-center py-20 mt-16">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>

      {/* Facts Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {facts.map(({ text }, index) => (
            <div key={text}>
              <h1 className="text-4xl font-bold text-blue-500">
                {Math.floor(animatedNumbers[index])}
              </h1>
              <p className="mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2">
          <img src={aboutImg} alt="" className="w-3/6 rounded mb-12" />
          <div className="absolute top-1/4 left-1/4 w-3/4">
            <img src={aboutImg} alt="" className="w-2/3 rounded" />
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h5 className="text-blue-600 font-semibold mb-2">About Us</h5>
          <h2 className="text-3xl font-bold mb-4">
            Transforming Ideas into IT Solutions
          </h2>
          <p className="mb-4 text-gray-700">
            V Net Technologies specializes in IT products and services with
            creation, innovation, and integrity. Our passion is fulfilling a
            client's unique needs...
          </p>
          <p className="mb-4 text-gray-700">
            We use technologies like Cloud (AWS/Azure), CCTV/Biometric, Website
            Development, and more to deliver complete solutions to our clients.
          </p>
          <Link
            to="/serviceshome"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
