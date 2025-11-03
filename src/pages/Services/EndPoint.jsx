import { FaUmbrella, FaMobileAlt, FaPencilAlt, FaCode, FaEyeSlash, FaSuitcase } from "react-icons/fa";

// Images
import EDRImg from "./assets/endpoint/Endpoint-Detection-and-Response_EP.png";
import EPPImg from "./assets/endpoint/Endpoint-Protection-Platform_EP.png";
import MTDImg from "./assets/endpoint/Mobile-Threat-Defense_EP.png";
import Blog1 from "./assets/endpoint/blogthumb1.jpg";
import Blog2 from "./assets/endpoint/blogthumb2.jpg";
import Blog3 from "./assets/endpoint/blogthumb3.jpg";

export default function EndpointSecurity() {
  const services = [
    { icon: <FaUmbrella className="text-blue-500 text-4xl" />, title: "Comprehensive Device Protection", description: "Protect all devices from malware, ransomware, phishing, and advanced threats, both on-site and remotely." },
    { icon: <FaMobileAlt className="text-green-500 text-4xl" />, title: "Real-Time Threat Detection", description: "AI-powered real-time monitoring detects and responds to potential threats quickly." },
    { icon: <FaPencilAlt className="text-purple-500 text-4xl" />, title: "Centralized Management", description: "Manage endpoints centrally, updating and configuring devices in real-time." },
    { icon: <FaCode className="text-indigo-500 text-4xl" />, title: "Automatic Threat Remediation", description: "Automated remediation allows IT teams to focus on strategic tasks while security runs in the background." },
    { icon: <FaEyeSlash className="text-red-500 text-4xl" />, title: "Data Loss Prevention", description: "Encryption, access controls, and secure file-sharing prevent unauthorized access." },
    { icon: <FaSuitcase className="text-yellow-500 text-4xl" />, title: "Real-Time Analytics & Reporting", description: "Detailed analytics and reports help enhance security and ensure compliance." },
  ];

  const teamMembers = [
    { image: EDRImg, role: "EDR", name: "Endpoint Detection and Response", description: "Detect, investigate, and respond to threats on endpoints (desktops, laptops, servers)." },
    { image: EPPImg, role: "EPP", name: "Endpoint Protection Platform", description: "Prevent malware and other threats from infecting endpoints with advanced protection." },
    { image: MTDImg, role: "MTD", name: "Mobile Threat Defense", description: "Safeguard sensitive data as mobile devices increasingly connect to corporate networks." },
  ];

  const blogPosts = [
    { image: Blog1, title: "Unified Security Platform" },
    { image: Blog2, title: "Strengthen Compliance Management" },
    { image: Blog3, title: "Simplify Task Management Systems" },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Intro Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-wide">What is Endpoint Security?</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Endpoint security is essential for servers, laptops, desktops, and mobile devices. Protect your company from evolving online dangers with our comprehensive solutions at V Net Technologies in Coimbatore.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-blue-900">Why Choose V-Net Technologies for Endpoint Security</h3>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5">{s.icon}</div>
              <h4 className="text-2xl font-semibold mb-3">{s.title}</h4>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Services Explanation */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <span className="text-blue-500 font-semibold">{member.role}</span>
                <h4 className="text-xl font-bold mt-2 mb-3">{member.name}</h4>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Benefits of Endpoint Security</h2>
          <p className="text-lg md:text-xl text-gray-200">Endpoint security shields enterprises from the ever-increasing threat landscape.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((b, i) => (
            <div key={i} className="bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <img src={b.image} alt={b.title} className="w-full h-56 object-cover"/>
              <div className="p-4">
                <h4 className="text-white text-xl font-semibold">{b.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
