import React from "react";
import { Link } from "react-router-dom";

const SocialMediaMarketing = () => {
  const services = [
    {
      name: "Instagram Marketing",
      path: "/instagram",
      description:
        "Grow your brand on Instagram with posts, stories, reels, and targeted ads. Engage your audience with visually appealing content and interactive campaigns to increase followers and brand loyalty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
      color: "bg-pink-50",
      textColor: "text-pink-700",
    },
    {
      name: "Facebook Marketing",
      path: "/facebook",
      description:
        "Reach millions with Facebook pages, sponsored posts, and targeted advertisements. Analyze engagement metrics and refine campaigns to maximize your ROI and connect with the right audience.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      color: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      name: "YouTube Marketing",
      path: "/youtubemarketing",
      description:
        "Promote your business with engaging video content. Use YouTube ads, tutorials, and live streams to increase brand visibility, educate your audience, and drive conversions.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
      color: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      name: "SMS Marketing",
      path: "/sms",
      description:
        "Send instant SMS campaigns to engage your customers directly. Perfect for promotions, alerts, and reminders, ensuring high open rates and immediate responses.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/SMS_icon.png",
      color: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      name: "Google Marketing",
      path: "/google",
      description:
        "Boost traffic with Google Ads, search engine optimization, and remarketing strategies. Increase leads and conversions by appearing at the right place at the right time.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      color: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
  ];

  const mainImage =
    "https://hindipanda.com/wp-content/uploads/2018/12/What-is-Social-Media-Marketing.jpg";

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 max-w-6xl mx-auto mt-12 space-y-12">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-center mb-4">
        Social Media Marketing
      </h1>
      <p className="text-gray-700 text-center text-lg max-w-3xl">
        Leverage the power of social media platforms to grow your business, connect with your audience, and boost your online presence. Explore our expert services below.
      </p>
      <img
        src={mainImage}
        alt="Social Media Marketing"
        className="w-full h-80 object-cover rounded-xl shadow-lg mt-6"
      />

      {/* Services Section */}
      <div className="flex flex-col w-full space-y-12 mt-12">
        {services.map((service, index) => (
          <Link
            key={service.name}
            to={service.path}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full md:w-1/3 h-52 object-contain rounded-lg mb-4 md:mb-0"
            />
            <div className={`md:ml-8 md:mr-8 flex-1 ${service.textColor}`}>
              <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
              <p className="text-gray-800 text-lg leading-relaxed">{service.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Click to learn more about <span className="font-semibold">{service.name}</span>.
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="w-full text-center mt-12 mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-gray-700 mb-6">
          Contact us today to start your personalized social media marketing strategy.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
