import SEOImg from "./assets/seo/seo1.png";
import AboutImg from "./assets/seo/about-left-image.png";
import ServiceIcon1 from "./assets/seo/service-icon-01.png";
import ServiceIcon2 from "./assets/seo/service-icon-02.png";
import ServiceIcon3 from "./assets/seo/service-icon-03.png";

// Features data
const features = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "We provide flexible, safe, and user-friendly applications that boost productivity and accommodate growth.",
  },
  {
    number: "02",
    title: "IT Consulting Services",
    description:
      "We help businesses improve technology, improve efficiency, and align technology projects with their goals for efficient growth.",
  },
  {
    number: "03",
    title: "Managed Network Services",
    description:
      "Provide a reliable, safe, and flexible platform to improve connectivity and performance for your business.",
  },
  {
    number: "04",
    title: "IT Support & Maintenance",
    description:
      "Overcoming challenges and providing regular status reports will contribute to the efficiency of the systems.",
  },
];

// Services data
const services = [
  {
    icon: ServiceIcon1,
    title: "On-Page SEO",
    description:
      "Enhances a website by improving content, meta tags, keywords, and internal links to enhance ranking and user experience.",
  },
  {
    icon: ServiceIcon2,
    title: "Off-Page SEO",
    description:
      "Involves building quality backlinks and boosting authority through social media, guest blogging, and expert collaborations.",
  },
  {
    icon: ServiceIcon3,
    title: "Technical SEO",
    description:
      "Optimizes website infrastructure, such as site speed, mobile friendliness, and accessibility, to improve search engine rankings.",
  },
  {
    icon: ServiceIcon3,
    title: "Local SEO",
    description:
      "Optimizes your website and online presence to attract customers in particular regions using local search results.",
  },
  {
    icon: ServiceIcon1,
    title: "Content Marketing",
    description:
      "Involves creating high-quality, SEO-friendly content to attract, engage, and convert your target audience.",
  },
  {
    icon: ServiceIcon2,
    title: "SEO Analytics and Reporting",
    description:
      "Tracks performance, rankings, traffic, and conversions to optimize SEO strategies.",
  },
];

export default function Seo() {
  return (
    <div className="space-y-24">

      {/* ===== HERO ===== */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">A Proven History of SEO Achievement</h3>
            <p className="text-gray-700">
              V-Net Technologies has years of experience in SEO and a demonstrated ability to deliver results to clients. Our team implements strategies that increase conversions, enhance organic reach, and improve rankings on Google.
            </p>
          </div>
          <div className="lg:w-1/2 text-center">
            <img src={SEOImg} alt="SEO" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="text-indigo-600 font-bold text-xl mb-2">{feature.number}</div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center gap-8 py-16">
        <div className="lg:w-1/2">
          <img src={AboutImg} alt="About SEO" className="rounded-xl shadow-lg" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Engaging on-page <span className="text-indigo-600">SEO</span> Service Writer
          </h2>
          <p className="text-gray-700">
            Use our dedicated on-page SEO services to boost website visibility. From headers, meta tags, and internal links to content, we optimize every aspect to strategically place high-value keywords and provide a seamless user experience.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-indigo-600">Our</span> Comprehensive <em>SEO</em> Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex items-start gap-4">
              <img src={service.icon} alt={service.title} className="w-12 h-12" />
              <div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
          