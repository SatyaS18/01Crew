"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          {/* <header className="bg-blue-600 text-white py-4 text-center text-lg font-semibold">
            01Crew - AI Solutions
          </header> */}
          <main className="flex-grow">{children}</main>
          <footer className="py-6 bg-[#121212] text-center text-gray-400">
            © 2025 01Crew. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
