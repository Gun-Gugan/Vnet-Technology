import React from "react";
import { FaCloudUploadAlt, FaShieldAlt, FaTools } from "react-icons/fa";

// Import images
import CloudMain from "./assets/cloud/Cloud-main.png";
import WhoWe from "./assets/cloud/who-we.png";
import StartToday from "./assets/cloud/start_today.jpeg";
import ChooseCloud from "./assets/cloud/choose-cloud.jpeg";
import BusinessCloud from "./assets/cloud/bussiness-cloud.jpeg";

// Services data with React Icons
const services = [
  {
    title: "Cloud Migration",
    description:
      "Seamlessly and securely migrate your workloads to AWS and Azure with our expert solutions.",
    icon: <FaCloudUploadAlt className="w-16 h-16 text-blue-500" />,
  },
  {
    title: "Security & Compliance",
    description:
      "Our strong security and compliance frameworks will protect your data.",
    icon: <FaShieldAlt className="w-16 h-16 text-green-500" />,
  },
  {
    title: "Developer Support",
    description:
      "Streamline development with our DevOps services for seamless CI/CD.",
    icon: <FaTools className="w-16 h-16 text-purple-500" />,
  },
];

// Carousel data
const carouselItems = [
  {
    title: "Start Today!",
    description:
      "Please contact us to get a free consultation at V Net Technology in Coimbatore.",
    image: StartToday,
  },
  {
    title: "Why choose the cloud?",
    description:
      "It allows for more scalability, flexibility, and security. Say goodbye to hardware limitations.",
    image: ChooseCloud,
  },
  {
    title: "Transform Your Business",
    description:
      "Unlock your business potential with AWS and Azure through V Net Technologies' cloud solutions.",
    image: BusinessCloud,
  },
];

export default function Cloud() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-600">
              CLOUD - AWS/AZURE
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Utilize our cloud services powered by AWS and Azure. Whether
              you’re looking to migrate, optimize, or scale your infrastructure,
              we provide the expertise to drive innovation.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={CloudMain}
              alt="Cloud"
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We provide specialized cloud solutions tailored for your business needs.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 border rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="mb-5">{service.icon}</div>
              <h5 className="text-2xl font-semibold mb-3">{service.title}</h5>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={WhoWe}
              alt="Who We Are"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Who We Are?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At V Net Technology, we specialize in AWS and Azure cloud solutions,
              helping organizations achieve seamless digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your Trusted Cloud Solutions Partner
          </h2>
        </div>
        <div className="container mx-auto space-y-10">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-indigo-50 p-8 rounded-2xl shadow-lg gap-8"
            >
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h5 className="text-2xl font-semibold">{item.title}</h5>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-center">
        <h3 className="text-4xl font-bold mb-6">Our Mission & Vision</h3>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          V Net Technologies enables businesses to leverage secure and scalable
          AWS and Azure clouds to foster digital transformation. We offer expert
          migration, deployment, and management to ensure operational efficiency.
        </p>
      </section>
    </div>
  );
}
