import React from "react";
import headingLine from "./assets/uiux/heading-line-dec.png";
import gif  from "./assets/uiux/gif_uiux.gif";
import right from "./assets/uiux/about-right-dec.png"
const bannerContent = [
  {
    title: "Creative Designer of UI/UX at V Net Technologies",
    paragraphs: [
      "V Net Technologies focuses on the delivery of great, easy to understand, and interactive digital experiences.",
      "Our UI/UX designing crew works on the aesthetic and functional interface for the customers and works to contribute to the brand.",
      "We make every effort to put users and their experience first as it relates to digital design, be it wireframes or the end product.",
      "This is aimed at ensuring that the customers are not only satisfied with the design but also are active engaged users in the digital platforms.",
    ],
  },
];

const aboutItems = [
  {
    title:
      "Why should you consider V-Net Technologies in Coimbatore for all your UI/UX designs?",
    image: headingLine,
    description:
      "V-Net Technologies is the melting point where creativity meets functionality and user-centric designs resulting in elegant UI/UX solutions which help you embrace the digital world. We are located in Coimbatore and appreciate every client’s requirements and come up with designs that are not only great looking but also easy to use as per the purposes.",
  },
];

const UiUx = () => {
  return (
    <>
      {/* Banner Section */}
      <section id="top" className="main-banner py-20 bg-gradient-to-r from-blue-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                {bannerContent.map((item, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                      {item.title}
                    </h2>
                    {item.paragraphs.map((para, idx) => (
                      <p key={idx} className="text-lg text-gray-700 mb-3 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <img
                src={gif}
                alt="UI/UX Designer"
                className="rounded-full w-72 h-72 object-cover shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
              <img
                src={right}
                alt="About Decoration"
                className="w-4/5 max-w-md mx-auto rounded-xl shadow-md"
              />
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                {aboutItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    <img
                      src={item.image}
                      alt="Heading Line"
                      className="mb-6"
                    />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiUx;
