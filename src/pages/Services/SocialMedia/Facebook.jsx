import React from "react";
import { 
  FaHeartbeat, FaBriefcaseMedical, FaMapMarkerAlt, FaFingerprint,
  FaCameraRetro, FaLeaf, FaCog, FaDatabase, FaStar, FaQuoteLeft
} from "react-icons/fa";

// Images
import HeroImg from "../assets/facebook/main-img.png";
import SideImg from "../assets/facebook/facebook-side.png";
import FeatureImg from "../assets/facebook/facebook-marketing.png";
import Testimonial1 from "../assets/facebook/image 1.png";
import Testimonial2 from "../assets/facebook/image 2.png";
import Testimonial3 from "../assets/facebook/image 3.png";

// Data
const cardsLeft = [
  { icon: <FaHeartbeat />, title: "Custom-Tailored Campaigns", desc: "We craft Facebook marketing blueprints that precisely fit your business goals." },
  { icon: <FaBriefcaseMedical />, title: "Advertisement Management", desc: "Our staff is well versed in Facebook advertisement management to optimize performance and increase ROI." },
];

const cardsRight = [
  { icon: <FaMapMarkerAlt />, title: "Data-Driven Insights", desc: "Using Facebook’s robust analytics tools, we track campaigns' performance and provide actionable insights." },
  { icon: <FaFingerprint />, title: "Analytics & Performance Tracking", desc: "Utilize comprehensive measurement systems and A/B testing techniques for effective campaign management." },
];

const features = [
  { icon: <FaCameraRetro />, title: "Increased Brand Awareness", desc: "Facebook’s promotional capabilities help enhance brand awareness to reach new audiences." },
  { icon: <FaLeaf />, title: "Massive Audience Reach", desc: "With over 2.8B active members, Facebook reaches people across ages, tastes, and regions." },
  { icon: <FaCog />, title: "Advanced Targeting Capabilities", desc: "Target audiences by age, sex, location, interests, and online behavior." },
  { icon: <FaDatabase />, title: "Measurable Results & Analytics", desc: "Analyze engagement metrics to evaluate performance and improve campaigns." },
];

const testimonials = [
  { img: Testimonial1, title: "Facebook Ads", desc: "Creating and managing ad campaigns to meet traffic, lead, or sales goals." },
  { img: Testimonial2, title: "Facebook Stories", desc: "Design Stories that are aesthetically appealing, capture focus, and drive engagement." },
  { img: Testimonial3, title: "Facebook Groups", desc: "We help create and manage groups to encourage interaction and strengthen brand connection." },
];

// Components
const Card = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 mb-6 p-4 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-white">
    <span className="text-4xl text-gradient mt-1">{icon}</span>
    <div>
      <h3 className="font-semibold text-lg mb-1 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-2xl transition duration-300 bg-white">
    <span className="text-5xl text-gradient mb-4 inline-block">{icon}</span>
    <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

const TestimonialCard = ({ img, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg relative hover:shadow-2xl transition duration-300">
    <p className="text-gray-700 mb-4">
      <b>{title}:</b> {desc}
    </p>
    <div className="flex items-center mt-4 gap-4">
      <img src={img} alt={title} className="w-12 h-12 rounded-full border-2 border-primary" />
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(5)].map((_, idx) => (
          <FaStar key={idx} />
        ))}
      </div>
    </div>
    <span className="absolute top-2 left-2 text-2xl text-gray-300">
      <FaQuoteLeft />
    </span>
  </div>
);

export default function FacebookMarketing() {
  return (
    <div className="space-y-32 bg-gray-50">

      {/* Hero Section */}
      <header className="hero container-fluid border-b py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Maximize Your Business Growth with Strategic Facebook Marketing</h1>
            <p className="text-lg lg:text-xl">
              The promotional capabilities of Facebook make it perfect to enhance brand awareness. Sponsored posts, stories, and ads expose your business to new audiences.
            </p>
          </div>
          <div className="lg:w-5/12 text-center">
            <img src={HeroImg} alt="Facebook Marketing" className="mx-auto w-4/5 rounded-full shadow-2xl border-4 border-white" />
          </div>
        </div>
      </header>

      {/* Product Cards */}
      <section id="product" className="container mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">WHY CHOOSE US FOR FACEBOOK MARKETING?</p>
          <p className="text-gray-700 text-lg">
            We leverage Facebook’s powerful targeting tools, advanced analytics, and engaging ad formats to drive growth for your business.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-4/12">{cardsLeft.map((card, idx) => <Card key={idx} {...card} />)}</div>
          <div className="lg:w-4/12 text-center">
            <img src={FeatureImg} alt="Facebook Features" className="w-3/4 mx-auto rounded-full shadow-2xl" />
          </div>
          <div className="lg:w-4/12">{cardsRight.map((card, idx) => <Card key={idx} {...card} />)}</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2 text-lg lg:text-xl">ADVANTAGES OF USING V NET TECHNOLOGY</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <img src={SideImg} alt="Facebook Side" className="w-full rounded-2xl shadow-lg" />
          </div>
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => <FeatureCard key={idx} {...feat} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Features of V Net Technology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => <TestimonialCard key={idx} {...testi} />)}
        </div>
      </section>

    </div>
  );
}
