import React from "react";

// Banner
import MainBanner from "./assets/laboffice/main_banner.png";

// About
import AboutImg from "./assets/laboffice/about-img.png";

// Client / Carousel
import HardwareImg from "./assets/laboffice/hardware.png";
import IoTTestingImg from "./assets/laboffice/Areas-Testing.png";
import InfrastructureImg from "./assets/laboffice/infrastructure.png";
import SoftwareToolsImg from "./assets/laboffice/Software-Tools.png";

// Blog / Office
import LayoutDesktops from "./assets/laboffice/Layout-Desktops.png";
import ConnectivityImg from "./assets/laboffice/Connectivity-Communication.png";
import MeetingImg from "./assets/laboffice/Meeting-Private.png";
import SecurityImg from "./assets/laboffice/Security-Data.png";

const labFeatures = [
  {
    title: "Hardware and Equipment",
    desc: "High-performance workstations with 32GB+ RAM and specialized hardware for advanced testing.",
    img: HardwareImg,
  },
  {
    title: "Areas of Testing",
    desc: "IoT device testing zones equipped with sensors, gadgets, and connectivity for experimentation.",
    img: IoTTestingImg,
  },
  {
    title: "Infrastructure",
    desc: "Power backup systems and optimized placement of switches, routers, and network devices.",
    img: InfrastructureImg,
  },
  {
    title: "Software Tools",
    desc: "Desktop & cloud virtualization tools like VMware and Docker for containerized testing environments.",
    img: SoftwareToolsImg,
  },
];

const officeBlogs = [
  {
    title: "Layout and Desktops",
    desc: (
      <>
        <b>Ergonomic Computers:</b> Adjustable seating, dual monitors, standing desks.<br />
        <b>Collaborative Rooms:</b> Private spaces with acoustics and video conferencing.
      </>
    ),
    img: LayoutDesktops,
    reverse: false,
  },
  {
    title: "Connectivity & Communication",
    desc: (
      <>
        <b>High-Speed Internet:</b> LAN & Wi-Fi coverage throughout the office.<br />
        <b>Cloud-Based Communication:</b> Tools like Google Workspace and Teams for collaboration.
      </>
    ),
    img: ConnectivityImg,
    reverse: true,
  },
  {
    title: "Meeting & Private Spaces",
    desc: (
      <>
        <b>Meeting Rooms:</b> Spaces with video conferencing for brainstorming and client meetings.<br />
        <b>Private Call Spaces:</b> Soundproof booths for private calls and focused work.
      </>
    ),
    img: MeetingImg,
    reverse: false,
  },
  {
    title: "Security & Data Protection",
    desc: (
      <>
        <b>Network Security:</b> Firewalls, VPNs, and encryption to safeguard data.<br />
        <b>Data Backup Systems:</b> Regular backups to prevent data loss.
      </>
    ),
    img: SecurityImg,
    reverse: true,
  },
];

// Reusable Section Card
const FeatureCard = ({ title, desc, img }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-500">
    <img src={img} alt={title} className="w-full md:w-1/2 h-64 object-cover rounded-xl" />
    <div className="md:w-1/2 space-y-2">
      <h3 className="text-2xl font-bold text-indigo-400">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  </div>
);

export default function LabOfficeSetup() {
  return (
    <div className="space-y-32">

      {/* Banner Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-indigo-100 via-white to-indigo-100 flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600">Lab and Office Setup</h1>
            <p className="mt-4 text-gray-700 text-lg">
              Innovative and productive spaces designed for laboratories and offices, optimized for collaboration and performance.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={MainBanner} alt="Lab & Office" className="w-full object-cover rounded-xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-16">
        <div className="md:w-1/2">
          <img src={AboutImg} alt="About Company" className="rounded-xl shadow-xl" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600">About Company</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded"></div>
          <p className="text-gray-700 text-lg">
            V-Net Technologies creates spaces that enhance creativity and productivity, enabling smooth collaboration and advanced prototyping.
          </p>
        </div>
      </section>

      {/* Lab / Client Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-600">Laboratory Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labFeatures.map((item, idx) => (
              <FeatureCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Office / Blog Section */}
      <section className="container mx-auto py-16 space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-600">Configuring the Office Environment</h2>
        <div className="space-y-12">
          {officeBlogs.map((blog, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                blog.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <img src={blog.img} alt={blog.title} className="rounded-xl shadow-xl w-full h-64 object-cover" />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-400">{blog.title}</h3>
                <p className="text-gray-700 text-lg">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
