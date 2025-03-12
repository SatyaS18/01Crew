"use client"
import { FaRegFileAlt } from "react-icons/fa";

const publications = [
  {
    year: "2024",
    title:
      "Transformer-based Approach for Predicting Student Admission Category in Higher Education",
    publisher: "IEEE",
    team: "Team 01Crew",
  },
  {
    year: "2024",
    title:
      "AI Integration Model for Resilience: Enhancing Mental Health and Education",
    publisher: "Taylor & Francis",
    team: "Team 01Crew",
  },
];

export default function PublicationTimeline() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#121212] to-[#1e1e2e] text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#bb86fc]">Publications</h2>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-[#1e1e2e] border border-[#6200ee] rounded-lg backdrop-blur-md shadow-lg hover:shadow-purple-600 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <FaRegFileAlt
                size={30}
                className="text-[#bb86fc] hover:scale-110 transition-transform"
              />
              <div>
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-sm text-gray-400">
                  {pub.publisher} • {pub.team}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
