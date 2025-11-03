import MainBannerImg from "./assets/audit/main-banner.gif";
import Icon1 from "./assets/audit/icon-01.png";
import Icon2 from "./assets/audit/icon-02.png";
import Icon3 from "./assets/audit/icon-03.png";
import Icon4 from "./assets/audit/icon-04.png";
import Icon5 from "./assets/audit/icon-05.png";
import Icon6 from "./assets/audit/icon-06.png";
import StandardsImg from "./assets/audit/Standards_Enforcement.png";
import OperationalImg from "./assets/audit/Operational_Disruptions.png";
import ThreatImg from "./assets/audit/Threat_Intelligence.png";
import GenSecurityImg from "./assets/audit/General-security.png";
import IdentityImg from "./assets/audit/Identity_Management.png";
import DataProtectionImg from "./assets/audit/Data_protection.png";
import NetworkSecurityImg from "./assets/audit/Network_Security.png";
import ContentSecurityImg from "./assets/audit/Content_Security.png";

// Types of Security Audit
const auditTypes = [
  { icon: Icon1, title: "Vulnerability Assessment" },
  { icon: Icon2, title: "Configuration Audit" },
  { icon: Icon3, title: "Risk Assessment" },
  { icon: Icon4, title: "Social Engineering" },
  { icon: Icon5, title: "Compliance Audit" },
  { icon: Icon6, title: "Network Security Audit" },
];

// Testimonials / Audit Frequency
const auditFrequency = [
  {
    img: StandardsImg,
    title: "Standards Enforcement",
    desc: "Many industries have regulatory requirements (e.g., GDPR, HIPAA, PCI DSS) that mandate periodic security audits, often annually or quarterly, to ensure organizations stay compliant with legal and industry standards.",
    reverse: true,
  },
  {
    img: OperationalImg,
    title: "Operational Disruptions",
    desc: "Security audits should be conducted immediately after major changes to IT systems or following security incidents (e.g., data breaches) to assess vulnerabilities introduced and to mitigate any potential risks.",
    reverse: false,
  },
  {
    img: ThreatImg,
    title: "Threat Intelligence",
    desc: "Our compliance audits ensure that a business is adhering to external regulations and internal policies, covering areas such as data protection, financial reporting, cybersecurity, and industry-specific standards.",
    reverse: true,
  },
];

// Security Audit Services Carousel
const auditServices = [
  {
    img: GenSecurityImg,
    title: "General Security",
    desc: "Our Website Security Audit provides Regular Software Updates which may involve the CMS, Plugins, and Frameworks.",
  },
  {
    img: IdentityImg,
    title: "Identity Management",
    desc: "We provide the authentication process involving verifying user passwords, whether the user credentials are valid or not.",
  },
  {
    img: DataProtectionImg,
    title: "Data Protection",
    desc: "Data protection is essential in Security Audit which is the evaluation and assessment of an organization's policies.",
  },
  {
    img: NetworkSecurityImg,
    title: "Network Security",
    desc: "Network Security is essential for the success of the development of the organization and provides insights.",
  },
  {
    img: ContentSecurityImg,
    title: "Content Security",
    desc: "We provide content security, including digital rights management and content encryption.",
  },
];

// Benefits
const auditBenefits = [
  {
    icon: Icon2,
    title: "Risk Identification",
    desc: "Helps identify potential vulnerabilities and threats that could compromise the security of systems and data.",
  },
  {
    icon: Icon4,
    title: "Improved Security",
    desc: "Strengthens overall security by addressing weaknesses and gaps identified during the audit.",
  },
  {
    icon: Icon6,
    title: "Cost Saving",
    desc: "Proactively addressing security vulnerabilities can reduce the financial impact of a data breach or cyber-attack.",
  },
];

export default function SecurityAudit() {
  return (
    <div className="space-y-24">

      {/* ===== Main Banner ===== */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Security Audit</h2>
            <p className="text-gray-700">
              Security Audits with V Net technologies in Coimbatore are examinations of an organization's security systems and data protection. They ensure compliance with established security policies, identify possible attacks, and detect security gaps and weaknesses.
            </p>
          </div>
          <div className="lg:w-1/2 text-center">
            <img src={MainBannerImg} alt="Security Audit" className="rounded-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* ===== Types of Security Audit ===== */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold"><em>Types of Security Audit</em> we provide</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {auditTypes.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <img src={item.icon} alt={item.title} className="mx-auto mb-4 w-20 h-20"/>
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Audit Frequency / Testimonials ===== */}
      <section className="container mx-auto py-16 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            How Frequently <em>Security Audits</em> is Necessary?
          </h2>
        </div>
        {auditFrequency.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 ${item.reverse ? "lg:flex-row-reverse" : ""}`}>
            <div className="lg:w-1/3 text-center">
              <img src={item.img} alt={item.title} className="rounded-lg shadow-lg"/>
            </div>
            <div className="lg:w-2/3">
              <h4 className="text-xl font-semibold mb-2 text-center lg:text-left">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Audit Services Carousel ===== */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Services provided in <em>Security Audit</em> at V Net Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {auditServices.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 text-center">
              <img src={item.img} alt={item.title} className="mx-auto mb-4 rounded-lg"/>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Benefits of a Security Audit</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {auditBenefits.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <img src={item.icon} alt={item.title} className="mx-auto mb-4 w-16 h-16"/>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
