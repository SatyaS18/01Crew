import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProductsSolutions from "@/components/ProductsSolution";
import PublicationTimeline from "@/components/PublicationTimeline";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import ResearchStats from "@/components/ResearchStats";
import ServiceCard from "@/components/ServiceCard";
import Services from "@/components/Services";

export default function Home() {
  // const services = [
  //   {
  //     title: "AI Chatbots",
  //     description: "Automate customer interactions with AI-powered chatbots.",
  //   },
  //   {
  //     title: "Process Automation",
  //     description: "Streamline workflows with intelligent automation tools.",
  //   },
  //   {
  //     title: "Business Analytics",
  //     description: "Leverage AI-driven insights to enhance decision-making.",
  //   },
  // ];

  return (
    <div>
      <HeroSection />
      <ProductsSolutions />
      <Services />
      <ResearchDevelopment />
      <PublicationTimeline />
      <ResearchStats />
      <About />
      <Contact />
      {/* <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section> */}
    </div>
  );
}
