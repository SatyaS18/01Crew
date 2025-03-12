import {
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaCogs,
  FaComments,
  FaMobileAlt,
  FaCode,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Generative AI",
    description:
      "State-of-the-art GENAI solutions for content generation, creative tasks, and automated workflows.",
    points: ["Content Generation", "Creative AI", "Workflow Automation"],
    icon: <FaBrain size={30} className="text-blue-500" />,
  },
  {
    title: "RAG Systems",
    description:
      "Advanced Retrieval-Augmented Generation systems for intelligent information processing and knowledge management.",
    points: ["Information Retrieval", "Knowledge Base", "Smart Processing"],
    icon: <FaRobot size={30} className="text-blue-500" />,
  },
  {
    title: "IoT Solutions",
    description:
      "Smart IoT integrations for healthcare, logistics, and home automation with real-time monitoring.",
    points: ["Healthcare IoT", "Smart Home", "Industrial IoT"],
    icon: <FaMicrochip size={30} className="text-blue-500" />,
  },
  {
    title: "AI Automation",
    description:
      "Custom AI-driven systems to streamline operations and enhance business efficiency.",
    points: ["Process Automation", "Workflow Optimization", "Smart Analytics"],
    icon: <FaCogs size={30} className="text-blue-500" />,
  },
  {
    title: "Conversational AI",
    description:
      "Intelligent chatbots and virtual assistants for enhanced customer engagement and support.",
    points: ["Smart Chatbots", "Virtual Assistants", "Customer Support"],
    icon: <FaComments size={30} className="text-blue-500" />,
  },
  {
    title: "Mobile Development",
    description:
      "Custom mobile applications with integrated AI capabilities for iOS and Android platforms.",
    points: ["iOS Apps", "Android Apps", "Cross-platform"],
    icon: <FaMobileAlt size={30} className="text-blue-500" />,
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications with cutting-edge technologies and seamless user experience.",
    points: ["Custom Websites", "Web Apps", "E-commerce"],
    icon: <FaCode size={30} className="text-blue-500" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Comprehensive maintenance and support services for all our solutions and implementations.",
    points: ["24/7 Support", "Updates", "Optimization"],
    icon: <FaTools size={30} className="text-blue-500" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="py-16 px-8 bg-gradient-to-b from-white to-gray-100 text-gray-900"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">
          Empowering businesses with cutting-edge AI and IoT solutions that
          drive innovation and growth
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              {service.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
