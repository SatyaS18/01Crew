import {
  FaBook,
  FaSeedling,
  FaBrain,
  FaBuilding,
  FaStethoscope,
  FaMicrochip,
} from "react-icons/fa";

const researchAreas = [
  {
    title: "Education Technology",
    description:
      "AI-driven admission systems, predictive analytics in education",
    icon: <FaBook size={30} className="text-blue-500" />,
  },
  {
    title: "Smart Agriculture",
    description:
      "IoT integration, predictive analytics for agricultural enhancement",
    icon: <FaSeedling size={30} className="text-blue-500" />,
  },
  {
    title: "Mental Health Innovation",
    description: "AI-powered mental health analysis, LLAMA 2 implementations",
    icon: <FaBrain size={30} className="text-blue-500" />,
  },
  {
    title: "Smart Infrastructure",
    description: "IoT-based parking systems, CCTV integration with OpenCV",
    icon: <FaBuilding size={30} className="text-blue-500" />,
  },
  {
    title: "Healthcare Technology",
    description: "Blockchain security, Aadhar integration, AI in healthcare",
    icon: <FaStethoscope size={30} className="text-blue-500" />,
  },
  {
    title: "Advanced AI & ML",
    description: "Transformer models, predictive analytics, machine learning",
    icon: <FaMicrochip size={30} className="text-blue-500" />,
  },
];

export default function ResearchDevelopment() {
  return (
    <section
      id="rd"
      className="py-16 px-8 bg-gradient-to-b from-white to-gray-100 text-gray-900"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Research & Development</h2>
        <p className="text-lg text-gray-600 mt-2">
          Pushing the boundaries of technology through innovative research
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {researchAreas.map((research, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              {research.icon}
              <h3 className="text-xl font-semibold">{research.title}</h3>
            </div>
            <p className="text-gray-600">{research.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
