import You1 from '../assets/youtube/Youtube-1.png'
import You2 from '../assets/youtube/Youtube-2.jpg'
import {
  FaHeartbeat,
  FaBriefcaseMedical,
  FaMapMarkerAlt,
  FaFingerprint
} from 'react-icons/fa';

const featuresLeft = [
  {
    Icon: FaHeartbeat,
    title: "Track Record of Success",
    description:
      "We’ve helped businesses boost their YouTube presence, increasing views, engagement, and conversions.",
  },
  {
    Icon: FaBriefcaseMedical,
    title: "Comprehensive Approach",
    description:
      "We manage all aspects of your YouTube marketing, from content creation to SEO, ads, and analytics, for a unified strategy.",
  },
];

const featuresRight = [
  {
    Icon: FaMapMarkerAlt,
    title: "Proven Expertise",
    description:
      "Our team's expertise in digital marketing and video production ensures that your YouTube initiatives are successful.",
  },
  {
    Icon: FaFingerprint,
    title: "Tailored Strategies",
    description:
      "We tailor YouTube marketing strategies to align with your business goals and audience for optimal results.",
  },
];

// Reusable card component
const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 text-2xl flex-shrink-0">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const YouTubeMarketing = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="border-b bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/3">
            <h4 className="text-4xl font-bold mt-5 mb-4">
              Elevate Your Brand with Expert YouTube Marketing Strategies
            </h4>
            <p className="text-gray-700 leading-relaxed">
              In this contemporary world, the importance of video content is well understood at V‑Net Technologies. Our YouTube marketing services help businesses expand reach, captivate audiences, and convert visitors into buyers. Let us harness video content to your advantage.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img
              src={You1}
              alt="YouTube Marketing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20" id="product">
        <div className="container mx-auto px-4">
          {/* Header Text */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
              Why Choose Us for YouTube Marketing?
            </p>
            <p className="text-gray-700 leading-relaxed">
              At V‑Net Technologies, we believe video content can significantly boost engagement and conversions. Our YouTube digital marketing services are crafted to help your business thrive in today’s competitive landscape.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Column */}
            <div className="flex flex-col gap-6 lg:w-1/3">
              {featuresLeft.map((f, idx) => (
                <FeatureCard
                  key={idx}
                  Icon={f.Icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center lg:w-1/3">
              <img
                src={You2}
                alt="YouTube Illustration"
                className="rounded-full w-3/4 shadow-lg"
              />
            </div>


            {/* Right Column */}
            <div className="flex flex-col gap-6 lg:w-1/3">
              {featuresRight.map((f, idx) => (
                <FeatureCard
                  key={idx}
                  Icon={f.Icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouTubeMarketing;
