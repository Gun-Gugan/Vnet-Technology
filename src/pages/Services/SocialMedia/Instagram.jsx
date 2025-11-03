import React from "react";
import { FaHeartbeat, FaBriefcaseMedical, FaMapMarkerAlt, FaFingerprint, FaCameraRetro, FaLeaf, FaCog, FaDatabase, FaQuoteLeft, FaStar } from "react-icons/fa";

// Images
import HeroImg from "../assets/instagram/insta-main.png";
import MainImg from "../assets/instagram/instagram-marketing.png";
import SideImg from "../assets/instagram/insta-side.png";
import PostImg from "../assets/instagram/post.png";
import StoryImg from "../assets/instagram/story.png";
import ReelsImg from "../assets/instagram/reels.png";

// Card data
const cardsLeft = [
  {
    icon: <FaHeartbeat className="text-pink-600 text-3xl mb-4" />,
    title: "Proven Track Record",
    desc: "We’ve helped businesses of all sizes enhance their Instagram presence and grow their brand through targeted strategies.",
  },
  {
    icon: <FaBriefcaseMedical className="text-pink-600 text-3xl mb-4" />,
    title: "Expert Team",
    desc: "Our team consists of social media experts, creatives, and data analysts who craft impactful campaigns.",
  },
];

const cardsRight = [
  {
    icon: <FaMapMarkerAlt className="text-pink-600 text-3xl mb-4" />,
    title: "Customized Solutions",
    desc: "We provide solutions tailored to your unique business needs and goals.",
  },
  {
    icon: <FaFingerprint className="text-pink-600 text-3xl mb-4" />,
    title: "Transparent Reporting",
    desc: "Clear, actionable reports ensure you always know how your campaigns are performing.",
  },
];

const featureCards = [
  {
    icon: <FaCameraRetro className="text-pink-600 text-3xl mb-4" />,
    title: "Massive Audience Reach",
    desc: "Instagram has over 1 billion active users, giving businesses immense opportunities for marketing and brand awareness.",
  },
  {
    icon: <FaLeaf className="text-pink-600 text-3xl mb-4" />,
    title: "Visual Storytelling",
    desc: "Instagram allows businesses to tell their story visually via photos, videos, and graphics—especially effective for fashion, food, travel, and lifestyle brands.",
  },
  {
    icon: <FaCog className="text-pink-600 text-3xl mb-4" />,
    title: "Instagram Shopping",
    desc: "Sell directly on Instagram via posts and Stories, converting followers into buyers seamlessly.",
  },
  {
    icon: <FaDatabase className="text-pink-600 text-3xl mb-4" />,
    title: "Increased Brand Awareness",
    desc: "Consistent content, hashtags, and Instagram’s Explore feature improve visibility to your target audience.",
  },
];

const testimonials = [
  {
    img: PostImg,
    title: "Instagram Posts",
    desc: "High-quality posts with in-depth audience targeting, captions, hashtags, and geolocation to reach the right audience.",
  },
  {
    img: StoryImg,
    title: "Instagram Stories",
    desc: "Stories provide playful, temporary updates with interactive tools like polls and quizzes to engage your audience.",
  },
  {
    img: ReelsImg,
    title: "Instagram Reels",
    desc: "Reels help create entertaining, viral content using music, effects, and editing tools to boost engagement and reach.",
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
    <span className="absolute -top-4 -left-4 text-pink-600 text-3xl">
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

export default function Instagram() {
  return (
    <div className="space-y-32">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-50 via-white to-pink-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-7/12">
            <h4 className="text-3xl lg:text-4xl font-bold mb-4">
              Unlocking Your Brand’s Potential with Strategic Instagram Marketing
            </h4>
            <p className="text-gray-700 text-lg">
              V Net Technology provides Instagram Digital Marketing services to help your brand reach the next level with tailored strategies for engagement and visibility.
            </p>
          </div>
          <div className="lg:w-5/12 text-center">
            <img src={HeroImg} alt="Instagram Marketing" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink-600 font-semibold mb-2 uppercase tracking-wider">WHY CHOOSE US FOR INSTAGRAM MARKETING?</p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We create personalized digital marketing strategies that suit your objectives. Our experts combine creativity and analytics to ensure visibility and real engagement.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-6">
            {cardsLeft.map((c, idx) => <InfoCard key={idx} {...c} />)}
          </div>
          <div className="text-center my-6 lg:my-0">
            <img src={MainImg} alt="Instagram Marketing" className="rounded-full w-72 lg:w-96 mx-auto shadow-lg" />
          </div>
          <div className="flex flex-col gap-6">
            {cardsRight.map((c, idx) => <InfoCard key={idx} {...c} />)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <img src={SideImg} alt="Instagram Features" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((f, idx) => <InfoCard key={idx} {...f} />)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-700">Features of V Net Technology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => <TestimonialCard key={idx} {...t} />)}
        </div>
      </section>

    </div>
  );
}
