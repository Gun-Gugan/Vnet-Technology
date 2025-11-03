import React from "react";
import { FaLaptop, FaLock, FaNetworkWired, FaCogs, FaCloud } from "react-icons/fa";

// Images
import CarouselImg from "./assets/computernetwork/Asset 5.png";
import AboutImg from "./assets/computernetwork/Asset 4.png";
import Feature1 from "./assets/computernetwork/Asset 1.png";
import Feature2 from "./assets/computernetwork/Asset 2.png";
import Feature3 from "./assets/computernetwork/Asset 3.png";

export default function ComputerNetwork() {
  const services = [
    {
      icon: <FaLaptop className="text-white text-5xl p-4 rounded-full bg-blue-500 mb-4 inline-block" />,
      title: "Network Design",
      description:
        "Planning and creating networks that effectively support organizational goals.",
    },
    {
      icon: <FaLock className="text-white text-5xl p-4 rounded-full bg-green-500 mb-4 inline-block" />,
      title: "Network Security",
      description:
        "Protect computer networks from attacks, modifications, and misuse.",
    },
    {
      icon: <FaNetworkWired className="text-white text-5xl p-4 rounded-full bg-purple-500 mb-4 inline-block" />,
      title: "Network Maintenance",
      description:
        "Maintain strong, secure infrastructure and improve performance.",
    },
    {
      icon: <FaCogs className="text-white text-5xl p-4 rounded-full bg-yellow-500 mb-4 inline-block" />,
      title: "Cost-effectiveness",
      description:
        "Optimize costs while keeping network architecture and security robust.",
    },
  ];

  const features = [
    {
      img: Feature1,
      title: "Expertise",
      desc: "Decades of experience designing and managing complex networks.",
    },
    {
      img: Feature2,
      title: "Customization",
      desc: "Solutions tailored to fit your specific business requirements.",
    },
    {
      img: Feature3,
      title: "Innovation",
      desc: "Integration of latest technologies like AI-driven network management.",
    },
  ];

  const cloudServices = [
    "Infrastructure as a Service (IaaS)",
    "Software as a Service (SaaS)",
    "Platform as a Service (PaaS)",
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Carousel */}
      <section className="relative h-[600px] w-full">
        <img src={CarouselImg} alt="Network Solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 flex items-center">
          <div className="container mx-auto text-left text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Computer Network Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-2xl drop-shadow">
              Seamless communication, secure networks, improved productivity, and optimized costs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3 text-center"
            >
              {service.icon}
              <h3 className="text-2xl font-bold my-4">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Cloud */}
      <section className="py-24 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={AboutImg}
          alt="Cloud Services"
          className="rounded-3xl w-full h-96 object-cover shadow-xl hover:scale-105 transition-transform"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Services</h2>
          <p className="text-gray-700 mb-6">
            Wide range of cloud computing services allowing businesses to access, store, and process data efficiently. Disaster recovery solutions ensure quick restoration of data and applications.
          </p>
          <ul className="space-y-3">
            {cloudServices.map((service, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <FaCloud className="text-blue-500 mr-3 text-xl" /> {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Support</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          We provide excellent technical support to maintain customer satisfaction and trust. Effective support resolves issues quickly and strengthens relationships.
        </p>
      </section>

      {/* Features */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose V-Net Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-3"
            >
              <img src={f.img} alt={f.title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
