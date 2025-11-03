import React from "react";
import { 
  FaHeartbeat, 
  FaBriefcaseMedical, 
  FaMapMarkerAlt, 
  FaFingerprint, 
  FaCameraRetro, 
  FaLeaf, 
  FaCog, 
  FaDatabase, 
  FaStar, 
  FaQuoteLeft 
} from "react-icons/fa";

// Images
import MainImg from "../assets/sms/main-img.png";
import SMSMarketingImg from "../assets/sms/sms-marketing.png";
import SMSSideImg from "../assets/sms/sms-side.png";
import SMS1 from "../assets/sms/sms 1.png";
import SMS2 from "../assets/sms/sms 2.png";
import SMS3 from "../assets/sms/sms 3.png";

// Dummy data
const whyChooseUs = [
  {
    icon: <FaHeartbeat />,
    title: "Instant Reach",
    description:
      "Contact your client instantly — most people open and read SMS in minutes.",
  },
  {
    icon: <FaBriefcaseMedical />,
    title: "Personalized Campaigns",
    description:
      "We tailor each SMS campaign to your brand, audience, and goals.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "High Engagement Rates",
    description:
      "SMS advertising has some of the highest open and reaction rates in comparison to other media.",
  },
  {
    icon: <FaFingerprint />,
    title: "Data-Driven Approach",
    description:
      "We monitor campaigns in real time, optimizing them based on performance.",
  },
];

const features = [
  {
    icon: <FaCameraRetro />,
    title: "Instant Delivery & High Open Rates",
    description:
      "Your message is almost guaranteed to be seen within minutes.",
  },
  {
    icon: <FaLeaf />,
    title: "Direct & Personal Communication",
    description:
      "SMS allows businesses to communicate directly with customers.",
  },
  {
    icon: <FaCog />,
    title: "Real-Time Tracking & Analytics",
    description:
      "Advanced tracking and analytics tools monitor your SMS campaigns live.",
  },
  {
    icon: <FaDatabase />,
    title: "Broad Reach Across Demographics",
    description:
      "Messages are delivered directly to mobile devices, reaching a wide audience.",
  },
];

const testimonials = [
  {
    avatar: SMS1,
    title: "Personalized SMS Campaigns",
    description:
      "Personalization is key to capturing customer attention. Tailored messages for your audience.",
  },
  {
    avatar: SMS2,
    title: "Automated SMS Marketing",
    description:
      "Save time with automated SMS campaigns across the customer journey.",
  },
  {
    avatar: SMS3,
    title: "SMS with URL Tracking",
    description:
      "Track clicks, monitor traffic, and analyze user behavior directly from SMS.",
  },
];

export default function SMSMarketing() {
  return (
    <div className="space-y-32 font-sans text-gray-800">

      {/* ===== HERO ===== */}
      <header className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 leading-tight">
              Drive Instant Results with Tailored SMS Marketing Solutions
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              SMS marketing has higher open rates than email and social media combined. Engage your audience instantly with V Net Technology.
            </p>
          </div>
          <div className="lg:w-5/12 text-center">
            <img
              src={MainImg}
              alt="SMS Marketing"
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </header>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="container mx-auto space-y-12">
        <div className="text-center">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider mb-2">Why Choose Us?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefits of SMS Marketing</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3 flex flex-col gap-6">
            {whyChooseUs.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="text-indigo-500 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 text-center my-6 lg:my-0">
            <img src={SMSMarketingImg} alt="SMS Illustration" className="w-3/4 mx-auto rounded-full shadow-2xl" />
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            {whyChooseUs.slice(2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="text-indigo-500 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <img src={SMSSideImg} alt="Features" className="rounded-3xl shadow-2xl w-full" />
          </div>
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
                <div className="text-indigo-500 text-4xl mb-4 inline-block">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="container mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">SMS Marketing Features by V Net Technology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 relative">
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <img src={item.avatar} alt={item.title} className="w-12 h-12 rounded-full" />
                <span className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </span>
              </div>
              <span className="absolute top-2 left-2 text-indigo-200 text-3xl"><FaQuoteLeft /></span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
