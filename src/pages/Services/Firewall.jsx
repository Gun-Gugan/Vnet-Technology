import React from "react";

// Images
import HeroBg from "./assets/firewall/Vintage 1980s Computer Setup (2).jpeg";
import ServerImg from "./assets/firewall/Designer (2).jpeg";
import FirewallImg from "./assets/firewall/firwall.2.jpg";
import SecurityImg from "./assets/firewall/firewall.3.jpg";
import AboutImg from "./assets/firewall/Cloud sync.gif";

// Data
const services = [
  {
    img: ServerImg,
    title: "Server Configuration",
    desc: "Effective server configuration and management play a vital role in performance and reliability. Choosing the correct OS, web server, and database configuration is key.",
  },
  {
    img: FirewallImg,
    title: "Firewall Configuration",
    desc: "We provide firewall configuration services to protect websites from unauthorized access, attacks, and data breaches by filtering traffic based on security principles.",
  },
  {
    img: SecurityImg,
    title: "Server Security",
    desc: "Robust server security services prevent cyber-attacks, protect sensitive data, and ensure safe online transactions on e-commerce platforms.",
  },
];

const clientFeatures = [
  { title: "Continuous Support", desc: "24/7 support and proactive server monitoring." },
  { title: "Customized Solution", desc: "Tailored configurations based on business needs." },
  { title: "Network Security", desc: "Certified team ensuring data and application protection." },
  { title: "Flexible Solutions", desc: "Scalable configurations to support business growth." },
  { title: "Data Encryption", desc: "We secure data with SSL/TLS encryption." },
];

// Components
const ServiceCard = ({ img, title, desc }) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-5">
    <div className="w-full aspect-video overflow-hidden rounded-2xl">
      <img src={img} alt={title} className="object-cover w-full h-full" />
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{desc}</p>
  </div>
);

const ClientFeature = ({ title, desc }) => (
  <div className="p-6 border rounded-xl bg-white shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="mt-2 text-gray-600">{desc}</p>
  </div>
);

export default function ServerFirewall() {
  return (
    <div className="space-y-32">

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={HeroBg}
          alt="Server/Firewall"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
        <div className="container mx-auto relative z-10 flex items-center h-full">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4">
              Server/Firewall Configuration
            </h1>
            <p className="text-white text-lg leading-relaxed">
              At V-Net Technologies, we provide highly skilled server and firewall
              configuration services that preserve your environment, enhancing
              both efficiency and scalability. Our team has experience setting up
              firewalls for businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-primary font-semibold text-base">Our Services</h2>
          <p className="text-4xl font-bold mt-2">Services provided at V-Net Technologies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <h2 className="text-4xl font-bold mb-4">
              Our Approach to Server/Firewall Configuration
            </h2>
            <p className="text-gray-700 leading-8">
              Our team expertly configures and manages servers to minimize downtime,
              optimize security, and ensure scalability. We deploy hardening measures
              including strong encryption mechanisms, SSL/TLS, custom firewall systems,
              secure VPN setups, and DDoS defense mechanisms to protect against attacks.
            </p>
          </div>
          <div className="lg:w-6/12">
            <img src={AboutImg} alt="About Us" className="rounded-2xl w-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* Client Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose V Net Technologies?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientFeatures.map((feature, idx) => (
            <ClientFeature key={idx} {...feature} />
          ))}
        </div>
      </section>

    </div>
  );
}
