import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaHome, FaServer, FaNetworkWired, FaLaptop } from "react-icons/fa";

// Images
import AboutImg from "./assets/service/about.jpg";
import SecurityImg from "./assets/service/security-audit.png";
import SEOImg from "./assets/service/seo.png";
import NetworkImg from "./assets/service/computer-network.png";
import CrmImg from "./assets/service/crm-erp.png";
import FirewallImg from "./assets/service/firewall.png";
import SalesImg from "./assets/service/sales.png";

export default function ServicesHome() {
  const aboutPoints = [
    "Experienced Experts",
    "Custom Solutions",
    "Transparent Reporting",
    "Dedicated Support",
    "Cutting-Edge Technology",
  ];

  const services = [
    { icon: <FaHome className="text-blue-500 text-4xl mb-4 mx-auto" />, title: "EndPoint Security", desc: "Protecting devices from cybercrime.", link: "/endpoint" },
    { icon: <FaServer className="text-blue-500 text-4xl mb-4 mx-auto" />, title: "Cloud - AWS/Azure", desc: "Main cloud service providers including storage and network.", link: "/cloud" },
    { icon: <FaLaptop className="text-blue-500 text-4xl mb-4 mx-auto" />, title: "UI/UX Design", desc: "Creating digital products with user-friendly interface and experience.", link: "/uiux" },
    { icon: <FaHome className="text-blue-500 text-4xl mb-4 mx-auto" />, title: "Website", desc: "User-friendly website development for better online presence.", link: "/website" },
    { icon: <FaNetworkWired className="text-blue-500 text-4xl mb-4 mx-auto" />, title: "Network Services", desc: "Enhance connectivity, performance, and security of your network.", link: "/network" },
    { icon: <FaCheck className="text-blue-500 text-4xl mb-4 mx-auto" />, title: "CCTV & Biometric", desc: "Identify people via physical characteristics for asset protection.", link: "/cctv" },
  ];

  const portfolio = [
    { img: SecurityImg, category: "Security Audit", title: "Ensure data and systems are safe digitally.", link: "/security" },
    { img: SEOImg, category: "SEO", title: "Improve website ranking and visibility.", link: "/seo" },
    { img: NetworkImg, category: "Computer Network Solutions", title: "Network is essential for organizational success.", link: "/computernetwork" },
    { img: CrmImg, category: "CRM / ERP", title: "Manage interactions between customers efficiently.", link: "/crm" },
    { img: FirewallImg, category: "Server / Firewall", title: "Set software and hardware to fulfill user needs.", link: "/serverfirewall" },
    { img: SalesImg, category: "All Accessories Sales", title: "Offer accessories for laptops, tablets, and more.", link: "/sale" },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* About */}
      <section className="container mx-auto py-24 px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h6 className="text-blue-500 font-semibold mb-2 uppercase tracking-wider">About Us</h6>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Why Choose V-Net Technologies</h2>
          <p className="mb-8 text-gray-700 text-lg leading-relaxed">
            We are committed to empowering businesses with innovative solutions, personalized support, and a future-ready approach.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {aboutPoints.map((point, i) => (
              <div key={i} className="flex items-center text-gray-700">
                <FaCheck className="text-blue-500 mr-3 text-xl" /> <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
        <img
          src={AboutImg}
          alt="About Us"
          className="w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transform transition duration-500"
        />
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-blue-500 font-semibold mb-2 uppercase tracking-wider">Our Services</h6>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">What Services We Provide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 text-center flex flex-col items-center"
              >
                {s.icon}
                <h5 className="text-xl md:text-2xl font-bold mb-3 mt-2">{s.title}</h5>
                <p className="text-gray-600 mb-6">{s.desc}</p>
                <Link
                  to={s.link}
                  className="mt-auto inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Managed Services */}
      <section className="container mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h6 className="text-blue-500 font-semibold mb-2 uppercase tracking-wider">Our Other Services</h6>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Managed Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.map((p, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition transform hover:-translate-y-3"
            >
              <img
                src={p.img}
                alt={p.category}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <small className="text-white flex items-center text-sm">
                  <FaCheck className="mr-2" /> {p.category}
                </small>
                <Link
                  to={p.link}
                  className="text-white font-bold mt-2 block text-lg md:text-xl"
                >
                  {p.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
