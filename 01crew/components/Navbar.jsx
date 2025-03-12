"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        if (window.scrollY > heroBottom) {
          setScrolledPastHero(true);
        } else {
          setScrolledPastHero(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${
        scrolledPastHero
          ? "bg-[#1e1e2e]/90 shadow-2xl"
          : "bg-white/10 backdrop-blur-3xl border border-white/15"
      } rounded-full px-10 py-2 flex items-center justify-between w-[85%] max-w-5xl font-semibold z-50 transition-all duration-300`}
    >
      {/* Company Name */}
      <div className="text-lg font-bold text-white transition-all mr-auto pl-6">
        01Crew
      </div>

      {/* Desktop Menu with Clickable Links */}
      <ul className="hidden md:flex gap-6 tracking-wide">
        {[
          { name: "Home", id: "hero-section" },
          { name: "Products & Solutions", id: "products" },
          { name: "Services", id: "services" },
          { name: "R&D", id: "rd" },
          { name: "About", id: "about" },

          { name: "Contact Us", id: "contact" },
        ].map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer transition-all px-2 py-1 rounded-md font-semibold ${
              scrolledPastHero
                ? "text-white hover:text-[#bb86fc]"
                : "text-white hover:text-[#bb86fc]"
            }`}
            onClick={() => scrollToSection(item.id)} // Attach click event
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
