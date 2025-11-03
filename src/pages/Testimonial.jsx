import React from "react";
import { FaStar } from "react-icons/fa";

// Import testimonial images
import testimonial1 from "../assets/testimonial/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial/testimonial-3.jpg";
import testimonial4 from "../assets/testimonial/testimonial-4.jpg";

// Array of testimonials
const testimonials = [
  {
    id: 1,
    name: "Client Name 1",
    profession: "Profession",
    image: testimonial1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    animationDelay: ".2s",
  },
  {
    id: 2,
    name: "Client Name 2",
    profession: "Profession",
    image: testimonial2,
    rating: 5,
    text: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    animationDelay: ".3s",
  },
  {
    id: 3,
    name: "Client Name 3",
    profession: "Profession",
    image: testimonial3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    animationDelay: ".5s",
  },
  {
    id: 4,
    name: "Client Name 4",
    profession: "Profession",
    image: testimonial4,
    rating: 5,
    text: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    animationDelay: ".7s",
  },
];


const Testimonial = () => {
  return (
    <section className="container mx-auto py-20 my-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center mb-12 animate-fade-in" data-wow-delay=".3s">
        <h5 className="text-blue-600 font-semibold mb-2">Our Testimonial</h5>
        <h1 className="text-4xl font-bold">Our Client Saying!</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map(({ id, name, profession, image, rating, text, animationDelay }) => (
          <div
            key={id}
            className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-6 rounded-xl shadow-xl animate-fade-in transform transition hover:scale-105 hover:shadow-2xl duration-300 border border-gray-200/50"
            data-wow-delay={animationDelay}
          >
            {/* Gradient Overlay for Subtle Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent rounded-xl pointer-events-none"></div>

            <div className="relative flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-300">
                <img
                  src={image}
                  alt={`Profile picture of ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-gray-800 font-semibold text-lg">{name}</h4>
                <p className="text-gray-500 text-sm">{profession}</p>
                <div className="flex mt-1">
                  {[...Array(rating)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-400 mr-1"
                      aria-label="Star rating"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300/50 mt-4 pt-4">
              <p className="text-gray-600 text-sm italic">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;