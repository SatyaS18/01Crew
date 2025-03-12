"use client";
import CountUp from "react-countup";
import { FaBook, FaSearch, FaClock, FaBuilding } from "react-icons/fa";

const stats = [
  {
    icon: (
      <FaBook
        size={30}
        className="text-[#bb86fc] hover:scale-110 transition-transform"
      />
    ),
    label: "Publications",
    count: 7,
  },
  {
    icon: (
      <FaSearch
        size={30}
        className="text-[#bb86fc] hover:scale-110 transition-transform"
      />
    ),
    label: "Research Areas",
    count: 6,
  },
  {
    icon: (
      <FaClock
        size={30}
        className="text-[#bb86fc] hover:scale-110 transition-transform"
      />
    ),
    label: "Years Active",
    count: 2,
  },
  {
    icon: (
      <FaBuilding
        size={30}
        className="text-[#bb86fc] hover:scale-110 transition-transform"
      />
    ),
    label: "Publishers",
    count: 3,
  },
];

const researchFields = [
  { name: "AI & ML", percentage: 40 },
  { name: "IoT", percentage: 25 },
  { name: "Healthcare Tech", percentage: 15 },
  { name: "Education Tech", percentage: 20 },
];

export default function ResearchStats() {
  return (
    <section className="py-10 bg-[#1e1e2e] text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-[#121212] rounded-lg shadow-md hover:scale-105 transition-all border border-[#6200ee]"
          >
            <div className="flex justify-center">{stat.icon}</div>
            <h3 className="text-2xl font-bold mt-2 text-[#bb86fc]">
              <CountUp end={stat.count} duration={2} />
            </h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Research Areas Progress Bars */}
      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-center text-lg font-semibold text-[#bb86fc]">
          Research Focus Areas
        </h3>
        {researchFields.map((field, index) => (
          <div key={index} className="mt-3">
            <p className="text-sm text-gray-300">{field.name}</p>
            <div className="w-full bg-gray-700 rounded-full h-3 relative">
              <div
                className="bg-gradient-to-r from-[#bb86fc] to-[#3700b3] h-3 rounded-full transition-all"
                style={{ width: `${field.percentage}%` }}
              ></div>
              <span className="absolute right-0 -top-5 text-xs text-[#bb86fc] opacity-0 hover:opacity-100 transition-opacity">
                {field.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
