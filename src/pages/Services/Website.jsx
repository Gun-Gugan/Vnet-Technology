import websiteCreator from "./assets/website/website_creator.svg";
import staticWebsite from "./assets/website/static_website.png";
import requirementStatic from "./assets/website/requirement_static.jpeg";
import contentStatic from "./assets/website/content_static.jpeg";
import designStatic from "./assets/website/web-design_static.jpeg";
import developmentStatic from "./assets/website/development_static.jpeg";
import testingStatic from "./assets/website/testing_static.jpeg";
import deploymentStatic from "./assets/website/deployment_static.jpeg";
import launchStatic from "./assets/website/launch_static.jpeg";
import maintenanceStatic from "./assets/website/maintanence_static.jpeg";
import contactStatic from "./assets/website/contact_static.jpeg";

import dynamicWebsite from "./assets/website/dynamic_website.jpeg";
import dynamicPlanning from "./assets/website/dynamic_planning.jpeg";
import dynamicDesigning from "./assets/website/dynamic_designing.jpeg";
import dynamicDevelopment from "./assets/website/dynamic_development.jpeg";
import dynamicTesting from "./assets/website/dynamic_testing.jpeg";
import dynamicDeployment from "./assets/website/dynamic_deployment.jpeg";
import dynamicLaunch from "./assets/website/dynamic_launch.png";

import ecommerceWebsite from "./assets/website/e-commerce_website.jpeg";
import d1 from "./assets/website/d-1.png";
import d2 from "./assets/website/d-2.png";
import d3 from "./assets/website/d-3.png";
import d4 from "./assets/website/d-4.png";
import d5 from "./assets/website/d-5.png";
import d6 from "./assets/website/d-6.png";

export default function Website() {
  const hero = {
    title: "Enabling Your Digital Change",
    subtitle: "Best Website Creating Services in Coimbatore: V Net Technologies",
    description:
      "We offer the best website design and development services in Coimbatore. Our experts craft visually stunning, high-performance, user-friendly websites that empower your business online.",
    img: websiteCreator,
  };

  const sections = [
    {
      id: "static",
      smallTitle: "Static Website",
      title: "Building a Static Website",
      description:
        "Static websites are ideal for businesses seeking fast, secure, and budget-friendly web solutions. We design SEO-friendly, responsive static sites that represent your brand perfectly.",
      img: staticWebsite,
      process: [
        { label: "Requirement Gathering", img: requirementStatic },
        { label: "Content Creation", img: contentStatic },
        { label: "Website Design", img: designStatic },
        { label: "Development", img: developmentStatic },
        { label: "Testing", img: testingStatic },
        { label: "Deployment", img: deploymentStatic },
        { label: "Post Launch", img: launchStatic },
        { label: "Maintenance", img: maintenanceStatic },
        { label: "Contact Us", img: contactStatic },
      ],
    },
    {
      id: "dynamic",
      smallTitle: "Dynamic Website",
      title: "Crafting Interactive Web Experiences",
      description:
        "Dynamic websites deliver interactive content, database-driven pages, and CMS integration. We build scalable, secure, and attractive web solutions tailored to your business needs.",
      img: dynamicWebsite,
      process: [
        { label: "Planning", img: dynamicPlanning },
        { label: "Designing", img: dynamicDesigning },
        { label: "Development", img: dynamicDevelopment },
        { label: "Testing", img: dynamicTesting },
        { label: "Deployment", img: dynamicDeployment },
        { label: "Post Launch", img: dynamicLaunch },
      ],
    },
    {
      id: "ecommerce",
      smallTitle: "E-Commerce Website",
      title: "Empowering Businesses with E-Commerce",
      description:
        "Our e-commerce solutions help you sell online effortlessly. From design to development, security to marketing — we handle everything to build your successful online store.",
      img: ecommerceWebsite,
      process: [
        { label: "Identification", img: d1 },
        { label: "Design", img: d2 },
        { label: "Development", img: d3 },
        { label: "Security", img: d4 },
        { label: "Launch", img: d5 },
        { label: "Marketing", img: d6 },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* ===== HEADER ===== */}
      <header className="bg-gradient-to-r from-indigo-600 via-sky-500 to-blue-600 text-white rounded-2xl p-12 my-8 text-center shadow-lg">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          {hero.title}
        </h1>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center my-12">
        <div className="md:col-span-5 flex justify-center">
          <img
            src={hero.img}
            alt="Website Creator"
            className="w-80 drop-shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:col-span-7 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-sky-700 mb-4">
            {hero.subtitle}
          </h3>
          <p className="text-gray-700 leading-relaxed">{hero.description}</p>
        </div>
      </section>

      {/* ===== SERVICE SECTIONS ===== */}
      {sections.map((s, index) => (
        <section key={s.id} className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-sm uppercase tracking-wide text-sky-500 font-semibold">
              {s.smallTitle}
            </h2>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              {s.title}
            </h3>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:col-span-4 flex justify-center">
              <img
                src={s.img}
                alt={s.smallTitle}
                className="w-72 h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-8 text-center md:text-left">
              <p className="text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          </div>

          {/* ===== PROCESS STEPS ===== */}
          <div className="mt-10">
            <h4 className="text-center text-xl font-semibold text-indigo-700 mb-6">
              Our Process
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {s.process.map((p, i) => (
                <div
                  key={p.label + i}
                  className="w-36 text-center bg-white shadow-md rounded-xl p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={p.img}
                    alt={p.label}
                    className="mx-auto w-20 h-20 object-cover rounded-full border-2 border-sky-400"
                  />
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== WHAT WE DO SECTION ===== */}
      <section className="my-20 bg-gradient-to-r from-blue-50 via-sky-100 to-indigo-50 py-12 rounded-2xl shadow-inner">
        <h2 className="text-center text-3xl font-bold text-indigo-700 mb-8">
          What We Do
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {sections[1].process.map((item, i) => (
            <div
              key={item.label + i}
              className="w-36 bg-white text-center shadow-md rounded-xl p-4 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.label}
                className="mx-auto w-20 h-20 object-cover rounded-full border border-sky-300"
              />
              <h3 className="mt-3 text-sm font-semibold text-gray-700">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
