import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Import team images
import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import team4 from "../assets/team/team-4.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Full Name 1",
    designation: "Designation",
    image: team1,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Nam volutpat libero sit amet leo cursus.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    animationDelay: ".3s",
  },
  {
    id: 2,
    name: "Full Name 2",
    designation: "Designation",
    image: team2,
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    animationDelay: ".5s",
  },
  {
    id: 3,
    name: "Full Name 3",
    designation: "Designation",
    image: team3,
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    animationDelay: ".7s",
  },
  {
    id: 4,
    name: "Full Name 4",
    designation: "Designation",
    image: team4,
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    animationDelay: ".9s",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = (member) => {
    setTimeout(() => setSelectedMember(member), 200);
    setIsVisible(true); // Trigger animation
  };

  const handleClose = () => {
    setIsVisible(false); // Start fade-out
    setTimeout(() => setSelectedMember(null), 200); // Delay state reset to allow animation
  };

  return (
    <section className="container mx-auto py-20 mb-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center mb-12 animate-fade-in" data-wow-delay=".3s">
        <h5 className="text-blue-600 font-semibold mb-2">Our Team</h5>
        <h1 className="text-4xl font-bold">Meet our expert Team</h1>
      </div>

      {selectedMember ? (
        <div
          className={`max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-gray-100 p-8 rounded-xl shadow-xl border border-gray-200/50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent rounded-xl pointer-events-none"></div>
          <div className="relative flex flex-col md:flex-row md:items-start md:space-x-8">
            {/* Details Section (Left on medium and larger screens) */}
            <div
              className={`md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">{selectedMember.name}</h4>
              <p className="text-gray-500 text-md mb-4">{selectedMember.designation}</p>
              <p className="text-gray-600 mb-6">{selectedMember.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                <a
                  href={selectedMember.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                  aria-label={`Follow ${selectedMember.name} on Facebook`}
                >
                  <FaFacebookF size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href={selectedMember.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                  aria-label={`Follow ${selectedMember.name} on Twitter`}
                >
                  <FaTwitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href={selectedMember.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                  aria-label={`Follow ${selectedMember.name} on Instagram`}
                >
                  <FaInstagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href={selectedMember.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                  aria-label={`Follow ${selectedMember.name} on LinkedIn`}
                >
                  <FaLinkedinIn size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              <button
                onClick={handleClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
            {/* Card Section (Right on medium and larger screens) */}
            <div
              className={`md:w-1/2 flex justify-center mt-6 md:mt-0 transition-transform duration-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-6 rounded-xl shadow-xl border border-gray-200/50 w-64">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent rounded-xl pointer-events-none"></div>
                <div className="relative flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-blue-300">
                    <img
                      src={selectedMember.image}
                      alt={`Profile picture of ${selectedMember.name}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center py-3">
                    <h4 className="text-lg font-semibold text-gray-800">{selectedMember.name}</h4>
                    <p className="text-gray-500 text-sm">{selectedMember.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-opacity duration-300 ${isVisible ? "opacity-0" : "opacity-100"
            }`}
        >
          {teamMembers.map(({ id, name, designation, image, socialLinks, animationDelay }) => (
            <div
              key={id}
              className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-6 rounded-xl shadow-xl animate-fade-in transform transition hover:scale-105 hover:shadow-2xl duration-300 border border-gray-200/50 cursor-pointer"
              data-wow-delay={animationDelay}
              onClick={() => handleCardClick({ id, name, designation, image, socialLinks, bio: teamMembers.find(m => m.id === id).bio })}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent rounded-xl pointer-events-none"></div>
              <div className="relative flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-blue-300">
                  <img
                    src={image}
                    alt={`Profile picture of ${name}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center py-3">
                  <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                  <p className="text-gray-500 text-sm">{designation}</p>
                </div>
                <div className="flex justify-center space-x-3 pb-4">
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                    aria-label={`Follow ${name} on Facebook`}
                  >
                    <FaFacebookF />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                    aria-label={`Follow ${name} on Twitter`}
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                    aria-label={`Follow ${name} on Instagram`}
                  >
                    <FaInstagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition"
                    aria-label={`Follow ${name} on LinkedIn`}
                  >
                    <FaLinkedinIn />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Team;