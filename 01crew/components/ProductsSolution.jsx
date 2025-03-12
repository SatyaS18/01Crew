import {
  FaBrain,
  FaRobot,
  FaGlobe,
  FaChartLine,
  FaCamera,
  FaCode,
} from "react-icons/fa";

const products = [
  {
    title: "AI Development",
    description:
      "Custom AI models and solutions for business automation and intelligent decision making",
    points: [
      "Machine Learning Models",
      "Neural Networks",
      "Deep Learning Solutions",
    ],
    icon: <FaBrain size={30} className="text-blue-500" />,
  },
  {
    title: "Chatbot Solutions",
    description:
      "Intelligent conversational AI systems for customer service and business automation",
    points: [
      "Natural Language Processing",
      "Custom Training",
      "Multi-platform Integration",
    ],
    icon: <FaRobot size={30} className="text-blue-500" />,
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications tailored to your business needs",
    points: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
    ],
    icon: <FaGlobe size={30} className="text-blue-500" />,
  },
  {
    title: "Predictive Analytics",
    description:
      "Data-driven insights and forecasting solutions for business intelligence",
    points: ["Trend Analysis", "Forecasting Models", "Business Intelligence"],
    icon: <FaChartLine size={30} className="text-blue-500" />,
  },
  {
    title: "Computer Vision",
    description: "Advanced image and video processing solutions using AI",
    points: ["Object Detection", "Image Recognition", "Video Analytics"],
    icon: <FaCamera size={30} className="text-blue-500" />,
  },
  {
    title: "Custom Software",
    description: "Bespoke software solutions integrated with AI capabilities",
    points: ["Enterprise Applications", "AI Integration", "Process Automation"],
    icon: <FaCode size={30} className="text-blue-500" />,
  },
];

export default function ProductsSolutions() {
  return (
    <section
      id="products"
      className="py-16 px-8 bg-gradient-to-b from-white to-gray-100 text-gray-900 border-none"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Products & Solutions</h2>
        <p className="text-lg text-gray-600 mt-2">
          Innovative and competitive AI-powered solutions for your business
          success
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              {product.icon}
              <h3 className="text-xl font-semibold">{product.title}</h3>
            </div>
            <p className="text-gray-600">{product.description}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              {product.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
