export default function HeroSection() {
  return (
    <section
      id="hero-section"
      // className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white relative overflow-hidden"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white relative animate-bgShift overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-20">
        <div className="w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>
      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-extrabold animate-fadeInUp">
          Empower Your Business with AI
        </h1>
        <p className="text-lg text-gray-200 mt-4 animate-fadeInUp delay-200">
          Transform workflows with intelligent automation and next-gen AI
          solutions.
        </p>
        {/* <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-all animate-fadeInUp delay-400">
          Get a Demo →
        </button> */}
        <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-[#ffccff] hover:scale-110 hover:shadow-2xl transition-all">
          Get a Demo →
        </button>
      </div>

      
    </section>
  );
}
