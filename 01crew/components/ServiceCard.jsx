import { FaRobot, FaCog, FaChartLine } from "react-icons/fa";

const icons = {
  "AI Chatbots": <FaRobot size={30} className="text-blue-500" />,
  "Process Automation": <FaCog size={30} className="text-green-500" />,
  "Business Analytics": <FaChartLine size={30} className="text-purple-500" />,
};

export default function ServiceCard({ title, description }) {
  return (
    <div className="p-6 bg-white shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-4">
        {icons[title]}
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}
