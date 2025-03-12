import { FaLightbulb, FaSearch, FaUsers, FaAward } from "react-icons/fa";

const stats = [
  { value: "21+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "7+", label: "Team Members" },
  { value: "24/7", label: "Support" },
];

const features = [
  {
    title: "Innovation-Driven Approach",
    description:
      "Pioneering solutions through cutting-edge technology and creative methodologies that keep you ahead in the digital landscape.",
    icon: <FaLightbulb size={30} className="text-[#bb86fc]" />,
  },
  {
    title: "Research-Backed Solutions",
    description:
      "Every solution is grounded in thorough research and analysis, ensuring robust and future-proof implementations.",
    icon: <FaSearch size={30} className="text-[#bb86fc]" />,
  },
  {
    title: "Expert Team Members",
    description:
      "Our diverse team of specialists brings deep expertise in AI, ML, IoT, and emerging technologies.",
    icon: <FaUsers size={30} className="text-[#bb86fc]" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Consistent delivery of high-impact solutions that exceed expectations and drive measurable business growth.",
    icon: <FaAward size={30} className="text-[#bb86fc]" />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-8 bg-gradient-to-b from-[#121212] to-[#1e1e2e] text-white"
    >
      {/* About Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          About <span className="text-[#bb86fc]">01 Crew</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          Located at the prestigious Kristu Jayanti College Incubation Center,
          01Crew stands at the forefront of technological innovation. We combine
          cutting-edge technology with creative problem-solving to deliver
          solutions that drive business growth.
        </p>
        <p className="italic text-[#bb86fc] mt-4">
          "Our mission is to empower businesses through innovative technology
          solutions and exceptional service delivery."
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-[#1e1e2e] border border-[#6200ee] rounded-lg text-center shadow-md hover:scale-105 transition-all"
          >
            <h3 className="text-3xl font-bold text-[#bb86fc]">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold">Why Choose Us?</h3>
        <p className="text-gray-300 mt-2">
          Empowering your success through innovation, expertise, and dedication.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-[#1e1e2e] border border-[#6200ee] rounded-lg shadow-md hover:scale-105 transition-all flex items-center space-x-4"
          >
            {feature.icon}
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
