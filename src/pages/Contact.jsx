import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const contactDetails = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Address",
    content: "137 D, 1st Floor, Velvalagam, Kalapatti pirivu check post, Saravanampatti, Coimbatore",
    link: "https://www.google.com/maps/dir//Vnet+Technologies,+Check+Post,+137+D,+1st+Floor,+Vel+Valagam,+Sathy+Rd,+opposite+Kalapatti+Pirivu,+Saravanampatti,+Coimbatore,+Tamil+Nadu+641035/@11.0745723,76.9992203,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8f778c1291d83:0xbdfa25d6159eb8a7!2m2!1d77.0017952!2d11.0745723?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
    linkType: "external",
    animationDelay: ".3s",
  },
  {
    id: 2,
    icon: <FaPhone />,
    title: "Call Us",
    content: "+91-9384813027",
    link: "tel:+919384813027",
    linkType: "tel",
    animationDelay: ".5s",
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email Us",
    content: "vnettechnologisit2024@gmail.com",
    link: "mailto:vnettechnologisit2024@gmail.com",
    linkType: "mailto",
    animationDelay: ".7s",
  },
];

const Contact = () => {
  // State for form inputs and submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto py-20 mb-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center mb-12 animate-fade-in" data-wow-delay=".3s">
        <h5 className="text-blue-600 font-semibold mb-2">Get In Touch</h5>
        <h1 className="text-4xl font-bold mb-3">Contact for any query</h1>
        <p className="text-gray-600 mb-2">
          We welcome everyone to explore our company's website to discover more about what we offer. Thanks for choosing V Net Technology at Coimbatore as a reliable partner.
        </p>
      </div>

      <div className="relative p-5 bg-white rounded-lg shadow-lg">
        {/* Contact Details */}
        <div className="grid gap-10 mb-10 justify-center">
          {contactDetails.map(({ id, icon, title, content, link, linkType, animationDelay }) => (
            <div
              key={id}
              className={`flex bg-gray-100 p-3 rounded-lg animate-fade-in md:${id === 1 ? "col-span-2" : "col-span-1"}`}
              data-wow-delay={animationDelay}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                {icon}
              </div>
              <div className="ml-4">
                <h4 className="text-blue-600 font-semibold">{title}</h4>
                <a
                  href={link}
                  target={linkType === "external" ? "_blank" : undefined}
                  rel={linkType === "external" ? "noopener noreferrer" : undefined}
                  className="text-lg text-gray-800 hover:underline"
                >
                  {content}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid gap-10 md:grid-cols-2">
          <div className="h-full animate-fade-in" data-wow-delay=".3s">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3915.519593795491!2d76.9992298231744!3d11.074599353626859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sv%20net%20technologies%20coimbatore!5e0!3m2!1sen!2sin!4v1730802702853!5m2!1sen!2sin"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V Net Technologies Location"
            ></iframe>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg animate-fade-in" data-wow-delay=".5s">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border-none rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border-none rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full p-3 border-none rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  placeholder="Project"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border-none rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  rows="6"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitStatus === "success" && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;