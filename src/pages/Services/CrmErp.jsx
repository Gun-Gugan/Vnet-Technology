import React from "react";
import { FaUsers, FaChartLine, FaBullhorn, FaCoins, FaBoxes, FaHeadset } from "react-icons/fa";

// Images
import LeftFeatureImg from "./assets/crm/left-image.png";
import RightFeatureImg from "./assets/crm/right-image.png";
import Testimonial1 from "./assets/crm/End-to-End Integration-crmerp.png";
import Testimonial2 from "./assets/crm/Real-Time-Data-Access_crm&erb.png";
import Testimonial3 from "./assets/crm/Increased-Efficiency_crm&erb.png";
import Blog1 from "./assets/crm/Improved-Productivity_crm&erb.png";
import Blog2 from "./assets/crm/Customer-Satisfaction_crm&erb.png";
import Blog3 from "./assets/crm/Cost-Savings_crm&erb.png";

export default function CrmErp() {
  const featuresSmall = [
    { icon: <FaUsers className="text-blue-500 text-4xl" />, title: "Relationship Management", description: "Efficiently manage all client information in one place." },
    { icon: <FaChartLine className="text-green-500 text-4xl" />, title: "Tracking Sales Pipeline", description: "Foster improvement in conversion rates by overseeing each sales stage." },
    { icon: <FaBullhorn className="text-purple-500 text-4xl" />, title: "Digital Marketing", description: "Highly effective campaigns to reach target market with minimal effort." },
  ];

  const bigFeatures = [
    {
      title: "Improve Relationships with Customers with Our Innovative CRM Solution",
      description: "V-Net Technologies provides a complete CRM system to streamline sales and structure customer data, enhancing satisfaction and profitability.",
      img: LeftFeatureImg,
      imgLeft: true,
    },
    {
      title: "Improve Company Processes using V-Net Technologies ERP Solutions",
      description: "ERP software integrates all company operations, enabling informed decisions in project management, HR, finance, and stock control.",
      img: RightFeatureImg,
      imgLeft: false,
    },
  ];

  const miniFeatures = [
    { icon: <FaCoins />, title: "Financial Management", desc: "Real-time financial performance tracking." },
    { icon: <FaBoxes />, title: "Inventory Management", desc: "Efficient logistics and inventory management." },
    { icon: <FaUsers />, title: "Human Resource Management", desc: "End-to-end employee management." },
    { icon: <FaChartLine />, title: "Project Management", desc: "Project planning, implementation, and oversight." },
    { icon: <FaBullhorn />, title: "Order Processing", desc: "Efficient order processing and invoicing." },
    { icon: <FaHeadset />, title: "Customer Support", desc: "Customer support management tools." },
  ];

  const testimonials = [
    { img: Testimonial1, title: "End-to-End Integration", description: "Our solutions combine sales, finance, HR, supply chain, and client interaction to form a unified platform." },
    { img: Testimonial2, title: "Real-Time Data Access", description: "Make informed decisions with dashboards and reporting systems to enhance prediction capabilities." },
    { img: Testimonial3, title: "Increased Efficiency", description: "Streamline order processing, invoicing, and reporting to focus more on core activities and reduce errors." },
  ];

  const blogPosts = [
    { img: Blog1, title: "Improved Productivity", desc: "Automate workflows to eliminate manual processes and increase efficiency." },
    { img: Blog2, title: "Customer Satisfaction", desc: "Integrated CRM solutions help understand customer expectations for faster responses." },
    { img: Blog3, title: "Cost Savings", desc: "Optimize stock, financials, and resource distribution for better resource conservation." },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Welcome */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-28 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="block">Customer Relationship Management</span>
          <span className="block">Enterprise Resource Planning</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          At V-Net Technologies in Coimbatore, we focus on providing cutting-edge ERP and CRM systems to help businesses thrive.
        </p>
      </section>

      {/* Small Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresSmall.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="mb-4">{f.icon}</div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Big Features */}
      {bigFeatures.map((feature, i) => (
        <section key={i} className="py-16 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {feature.imgLeft && <img src={feature.img} alt={feature.title} className="rounded-3xl w-full lg:w-5/12 shadow-lg" />}
            <div className="lg:w-7/12 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{feature.title}</h2>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
            {!feature.imgLeft && <img src={feature.img} alt={feature.title} className="rounded-3xl w-full lg:w-5/12 shadow-lg" />}
          </div>
        </section>
      ))}

      {/* Mini Features */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {miniFeatures.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="mb-3 text-3xl text-blue-500">{f.icon}</div>
              <strong className="block mb-2">{f.title}</strong>
              <span className="text-gray-600 text-sm">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose V-Net Technologies CRM/ERP Solutions?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="mb-4 flex justify-center">
                <img src={t.img} alt={t.title} className="w-16 h-16 rounded-full" />
              </div>
              <p className="text-gray-700 mb-4 text-sm">{t.description}</p>
              <h4 className="text-lg font-semibold">{t.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / Benefits */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">How CRM/ERP Systems Benefit Your Business</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((b, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
              <img src={b.img} alt={b.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">{b.title}</h4>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
