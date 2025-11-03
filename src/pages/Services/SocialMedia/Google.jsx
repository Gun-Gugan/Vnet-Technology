import React from "react";
import { FaHeartbeat, FaBriefcaseMedical, FaMapMarkerAlt, FaFingerprint, FaCameraRetro, FaLeaf, FaCog, FaDatabase, FaQuoteLeft, FaStar } from "react-icons/fa";

// Images
import HeroImg from "../assets/google/main-img.png";
import MainImg from "../assets/google/google-marketing.png";
import SideImg from "../assets/google/google-side.png";
import SearchImg from "../assets/google/google 1.png";
import DisplayImg from "../assets/google/google 2.png";
import ShoppingImg from "../assets/google/google 3.png";

// Card Data
const leftCards = [
  {
    icon: <FaHeartbeat className="text-indigo-600 text-3xl mb-4" />,
    title: "Proven Expertise",
    desc: "Having managed AdWords and AdSense campaigns over the years, we know what works best and deliver results-driven campaigns.",
  },
  {
    icon: <FaBriefcaseMedical className="text-indigo-600 text-3xl mb-4" />,
    title: "Customized Solutions",
    desc: "We offer digital marketing strategies tailored to each business to align with their objectives.",
  },
];

const rightCards = [
  {
    icon: <FaMapMarkerAlt className="text-indigo-600 text-3xl mb-4" />,
    title: "Transparency & Reporting",
    desc: "Receive constant updates and communication showing campaign performance.",
  },
  {
    icon: <FaFingerprint className="text-indigo-600 text-3xl mb-4" />,
    title: "Results-Driven Approach",
    desc: "We focus on driving revenue and reducing costs to enhance business outcomes.",
  },
];

const featureCards = [
  {
    icon: <FaCameraRetro className="text-indigo-600 text-3xl mb-4" />,
    title: "Instant Visibility and Traffic",
    desc: "Google Ads provides almost instant exposure on search results and partner networks, bringing traffic from day one.",
  },
  {
    icon: <FaLeaf className="text-indigo-600 text-3xl mb-4" />,
    title: "Highly Targeted Audience Reach",
    desc: "Target by location, device, audience behavior, time, and keywords for maximum engagement.",
  },
  {
    icon: <FaCog className="text-indigo-600 text-3xl mb-4" />,
    title: "Flexible Budgeting and Cost Control",
    desc: "Control your ad spend with daily/monthly limits and pay-per-click models for efficient marketing.",
  },
  {
    icon: <FaDatabase className="text-indigo-600 text-3xl mb-4" />,
    title: "Diverse Ad Formats",
    desc: "Choose from search, display, shopping, video, or app promotion ads to meet business objectives.",
  },
];

const testimonials = [
  {
    img: SearchImg,
    title: "Search Ads",
    desc: "Display ads at the top of search results, driving qualified traffic and boosting conversions.",
  },
  {
    img: DisplayImg,
    title: "Display Ads",
    desc: "Graphical ads on Google’s partner sites help build brand presence and retarget users.",
  },
  {
    img: ShoppingImg,
    title: "Shopping Ads",
    desc: "Targeted product ads with images, price, and descriptions make it easy to drive sales.",
  },
];

// Reusable Card Component
const InfoCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-500">
    {icon}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

const TestimonialCard = ({ img, title, desc }) => (
  <div className="bg-white rounded-xl shadow p-6 relative hover:shadow-2xl transition duration-500">
    <span className="absolute -top-4 -left-4 text-gray-400 text-3xl">
      <FaQuoteLeft />
    </span>
    <img src={img} alt={title} className="w-20 h-20 rounded-full mx-auto mb-4" />
    <h4 className="font-bold text-lg text-center mb-2">{title}</h4>
    <p className="text-gray-700 text-center">{desc}</p>
    <div className="flex justify-center mt-3 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  </div>
);

export default function Google() {
  return (
    <div className="space-y-32">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-7/12">
            <h4 className="text-3xl lg:text-4xl font-bold mb-4">
              Google AdWords & AdSense Services by V Net Technology
            </h4>
            <p className="text-gray-700 text-lg">
              Google AdSense allows you to generate income via ads on your site.
              AdWords campaigns drive quality traffic to boost your business.
            </p>
          </div>
          <div className="lg:w-5/12 text-center">
            <img src={HeroImg} alt="Google Ads & AdSense" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold mb-2 uppercase tracking-wider">WHY CHOOSE US?</p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our specialists focus on strengthening online presence and maximizing ROI via Google AdWords & AdSense.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-6">{leftCards.map((c, i) => <InfoCard key={i} {...c} />)}</div>
          <div className="text-center my-6 lg:my-0">
            <img src={MainImg} alt="Google Marketing" className="rounded-full w-72 lg:w-96 mx-auto shadow-lg" />
          </div>
          <div className="flex flex-col gap-6">{rightCards.map((c, i) => <InfoCard key={i} {...c} />)}</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <img src={SideImg} alt="Google Features" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((f, i) => <InfoCard key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Google Ads & AdSense Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </section>

    </div>
  );
}
