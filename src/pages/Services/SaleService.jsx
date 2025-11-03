import React from "react";
import { FaLaptop, FaAndroid, FaPaperPlane, FaHtml5 } from "react-icons/fa";

// Images
import MainBanner from "./assets/saleservice/main-banner.png";
import KeyboardImg from "./assets/saleservice/keyboard.png";
import MouseImg from "./assets/saleservice/mouse.png";
import PrinterScannerImg from "./assets/saleservice/printer_scanner.png";

// Services data
const services = [
  {
    icon: <FaLaptop className="text-indigo-600 text-4xl mt-2" />,
    title: "Product Consultation",
    desc: "Our experts provide personalized recommendations based on your specific requirements.",
  },
  {
    icon: <FaAndroid className="text-indigo-600 text-4xl mt-2" />,
    title: "Installation and Setup",
    desc: "Get your accessories up and running quickly with our professional installation services.",
  },
  {
    icon: <FaPaperPlane className="text-indigo-600 text-4xl mt-2" />,
    title: "Maintenance and Repairs",
    desc: "Extend the life of your accessories with regular maintenance and quick, reliable repairs from our skilled technicians.",
  },
  {
    icon: <FaHtml5 className="text-indigo-600 text-4xl mt-2" />,
    title: "Replacement and Warranty",
    desc: "We honor warranties and provide hassle-free replacement services to ensure your satisfaction.",
  },
];

// Accessories data
const accessories = [
  {
    img: KeyboardImg,
    title: "Keyboards",
    desc: "V-Net Technologies provides a comprehensive selection of mechanical, membrane, and ergonomic wired and wireless keyboards designed for office, gaming or professional usage.",
  },
  {
    img: MouseImg,
    title: "Mouse",
    desc: "We have a range of mice namely: optical mice, laser mice, etc, which are intended to cater for different factors of comfort, speed, and software accuracy.",
  },
  {
    img: PrinterScannerImg,
    title: "Printer & Scanner",
    desc: "V-Net Technologies offers a wide range of printers and scanners, including several multifunctional devices capable of printing, scanning, copying and faxing.",
  },
];

export default function SaleAndService() {
  return (
    <div className="space-y-32 font-sans text-gray-800">

      {/* ===== Home Banner ===== */}
      <section id="home" className="relative h-[600px] md:h-[700px]">
        <img src={MainBanner} alt="All accessories" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="text-center max-w-3xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              All Accessories Sales & Services
            </h1>
            <p className="text-lg md:text-xl">
              V-Net Technologies provides end-to-end last mile sales and service solutions of all technology accessories. Our sales inventory spans keyboards, mice, printers, scanners, and other PC accessories to ensure quality and compatibility among devices.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="service" className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Our Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4 rounded"></div>
          <h4 className="text-gray-600 text-lg">Your one-stop solution for high-quality accessories</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <div key={i} className="flex gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 items-start">
              {service.icon}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Divider ===== */}
      <div className="bg-indigo-50 py-20 text-center px-6">
        <h3 className="text-3xl font-bold uppercase mb-4">Your Trusted Partner Throughout the Accessory Lifecycle</h3>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          V-Net Technologies takes pride in assuring that it will be a reliable partner in all accessories purchased, even when it takes a full course of a product life-cycle.
        </p>
      </div>

      {/* ===== Accessories ===== */}
      <section id="about" className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">All Accessories</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4 rounded"></div>
          <h4 className="text-gray-600 text-lg">Explore Our Comprehensive Accessories</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {accessories.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
              <img src={item.img} alt={item.title} className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
