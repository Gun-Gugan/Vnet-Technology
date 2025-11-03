import React from "react";
import {
  FaHeartbeat,
  FaBriefcaseMedical,
  FaMapMarkerAlt,
  FaFingerprint,
} from "react-icons/fa";

import email1 from "../assets/email/email_marketing.png";
import email2 from "../assets/email/mail 1.png";

// Reusable Card Component
const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
    <div className="text-blue-600 text-3xl flex-shrink-0">
      <Icon />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// Feature Data
const features = [
  {
    Icon: FaHeartbeat,
    title: "Strategy and Campaign Planning",
    description:
      "We create tailored email marketing strategies with audience insights and goal-based planning to maximize engagement and ROI.",
  },
  {
    Icon: FaBriefcaseMedical,
    title: "Email List Building and Management",
    description:
      "Grow and maintain a healthy email list using lead capture tools, regular cleanups, and GDPR/CAN-SPAM compliance.",
  },
  {
    Icon: FaMapMarkerAlt,
    title: "Creative Email Design",
    description:
      "Design visually compelling, mobile-friendly templates that reflect your brand and drive clicks with effective CTAs.",
  },
  {
    Icon: FaFingerprint,
    title: "Analytics and Performance Tracking",
    description:
      "Use analytics, A/B testing, and data insights to continually optimize email campaigns for better conversions.",
  },
];

const EmailMarketing = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white border-b py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Boost Your Business with Personalized Email Marketing Strategies
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Email marketing is key to building strong customer relationships and boosting sales. At <b>V-Net Technologies</b>, we design data-driven campaigns that connect, engage, and convert.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/3">
            <img
              src={email2}
              alt="Email Marketing Banner"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto mb-14">
            <h5 className="text-blue-600 font-semibold uppercase mb-2">
              Why Choose Us?
            </h5>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re reaching new prospects or nurturing loyal customers,
              <b> V-Net Technologies </b> helps you craft impactful, measurable
              email marketing campaigns that deliver results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {features.slice(0, 2).map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src={email1}
                alt="Email Marketing Illustration"
                className="rounded-full w-3/4 shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {features.slice(2).map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;
