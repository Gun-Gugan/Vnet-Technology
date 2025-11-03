import React from "react";
import NetworkGif from "./assets/network/Network_giff_image.gif";
import NetworkDesign from "./assets/network/Network_design.jpeg";
import NetworkSecurity from "./assets/network/Network_Security.jpeg";
import NetworkMaintenance from "./assets/network/Network_Maintenance.jpeg";
import CostEffectiveness from "./assets/network/Cost-effectiveness_Network.jpeg";
import CloudServices from "./assets/network/Cloud-services_Network.jpeg";
import TechnicalSupport from "./assets/network/Technical_support_network.jpeg";

// Carousel network
import InternetConnectivity from "./assets/network/Internet_connectivity_Network.jpeg";
import NetworkSecurityServices from "./assets/network/Network_security_services.jpeg";
import VPN from "./assets/network/Virtual_Private_Networks.jpeg";
import CloudNetworking from "./assets/network/Cloud_Networking_Slideshow.jpeg";
import WirelessServices from "./assets/network/Wireless_Services_Network.jpeg";

// Service cards data
const networkServices = [
  {
    title: "Network Design",
    desc: "We provide network design which is the process of planning and creating a network that effectively supports an organization’s goals. Selecting hardware, software, and protocols to ensure a safe and effective network environment.",
    features: ["Scalability", "Flexibility", "Designing for Protection", "Availability", "SEO Analysis", "Performance Optimization"],
    img: NetworkDesign,
  },
  {
    title: "Network Security",
    desc: "Besides offering a secure network, V-Net Technology delivers peace of mind with top-of-the-line protection measures.",
    features: ["General Method", "AI-Driven and Forward-Thinking Safeguards", "Tailored Answers", "Expert Team"],
    img: NetworkSecurity,
  },
  {
    title: "Network Maintenance",
    desc: "Our experts ensure your network is reliable, safe, and quick so you can focus on business growth.",
    features: ["Extensive Coverage", "Active Assistance", "Succession of Organization"],
    img: NetworkMaintenance,
  },
  {
    title: "Cost-effectiveness",
    desc: "Enjoy top-notch tech and wallet-friendly prices with scalable solutions that support business growth without high costs.",
    features: ["Reduced infrastructure and operating expenses", "Boost the performance of the network", "Extend your network with scalability"],
    img: CostEffectiveness,
  },
  {
    title: "Cloud Service",
    desc: "We provide cloud services that allow businesses to access, store, and process data without local servers.",
    features: ["Consulting & Strategy for Cloud", "Cloud Migration Service Provider", "24/7 Monitoring & Management", "Disaster Recovery & Cloud Backup"],
    img: CloudServices,
  },
  {
    title: "Technical Support",
    desc: "We provide high-quality technical support to maintain customer satisfaction and trust.",
    features: ["Expertise", "Active Technique", "Quick Response", "Complete Assistance", "Customer-focused"],
    img: TechnicalSupport,
  },
];

// Portfolio / carousel data
const portfolio = [
  { img: InternetConnectivity, title: "Internet Connectivity" },
  { img: NetworkSecurityServices, title: "Network Security Services" },
  { img: VPN, title: "Virtual Private Networks" },
  { img: CloudNetworking, title: "Cloud Networking Services" },
  { img: WirelessServices, title: "Wireless Services" },
];

export default function Network() {
  return (
    <div className="space-y-32">

      {/* ===== Banner ===== */}
      <section className="relative h-[600px] md:h-[700px]">
        <img src={NetworkGif} alt="Network" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="max-w-2xl text-center text-white space-y-6">
            <h6 className="text-lg md:text-xl font-medium">Stronger Networks, Smarter Solutions</h6>
            <h2 className="text-4xl md:text-5xl font-bold">We Boost Your Website Traffic</h2>
            <p className="text-base md:text-lg">
              In the rapidly developing world, a network is essential for the success of an organisation's development. We provide seamless communication, network security, improved productivity, and cost reduction.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Service Cards ===== */}
      <section className="container mx-auto py-16 space-y-12">
        <div className="text-center mb-12">
          <h6 className="text-indigo-600 font-semibold">V Net Technology in Effective Networks</h6>
          <h4 className="text-3xl md:text-4xl font-bold">What Our Company <em>Provides</em></h4>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {networkServices.map((service, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6">
              <img src={service.img} alt={service.title} className="w-full md:w-1/2 h-64 object-cover rounded-xl" />
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
                <h5 className="font-semibold">Why Choose Us?</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Portfolio / Slideshow ===== */}
      <section className="container mx-auto py-16">
        <div className="mb-12 text-center">
          <h4 className="text-3xl font-bold">Our <em>Services</em></h4>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {portfolio.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center font-semibold">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
