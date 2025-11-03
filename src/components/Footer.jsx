import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          {/* <img src={logo} alt="V Net Technologies Logo" className="h-10 mb-4" /> */}
          <p className="text-sm text-gray-300">
            We specialize in web development, UI/UX, cloud services, and security systems.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <a
                href="https://www.google.com/maps/dir//Vnet+Technologies,+Check+Post,+137+D,+1st+Floor,+Vel+Valagam,+Sathy+Rd,+opposite+Kalapatti+Pirivu,+Saravanampatti,+Coimbatore,+Tamil+Nadu+641035"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                137 D, 1st Floor, Velvalagam, Saravanampatti, Coimbatore
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+919384813027" className="hover:underline">
                +91-9384813027
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:vnettechnologisit2024@gmail.com" className="hover:underline">
                vnettechnologisit2024@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} V Net Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;