import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-8 bg-gradient-to-b from-[#121212] to-[#1e1e2e] text-white"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-lg text-gray-300 mt-2">
          Have a project in mind? Let’s discuss how we can help transform your
          business.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Google Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-[#6200ee]">
          <iframe
            className="w-full h-64 md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.543572377147!2d77.64247521464905!3d13.035770090810226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1772b0e10e67%3A0x6740d6e0132a76c6!2sKristu%20Jayanti%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1674085343000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-6">
          <div className="p-6 bg-[#1e1e2e] border border-[#6200ee] rounded-lg shadow-md flex items-center space-x-4">
            <FaMapMarkerAlt size={30} className="text-[#bb86fc]" />
            <div>
              <h3 className="text-lg font-semibold">Our Location</h3>
              <p className="text-gray-300">
                Kristu Jayanti College, Kothanur, Bengaluru - 560077
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#1e1e2e] border border-[#6200ee] rounded-lg shadow-md flex items-center space-x-4">
            <FaEnvelope size={30} className="text-[#bb86fc]" />
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-gray-300">info@01crew.com</p>
            </div>
          </div>

          <div className="p-6 bg-[#1e1e2e] border border-[#6200ee] rounded-lg shadow-md flex items-center space-x-4">
            <FaPhone size={30} className="text-[#bb86fc]" />
            <div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="text-gray-300">+91 7483075022</p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-4">
            <button className="px-6 py-3 bg-[#bb86fc] text-[#121212] font-semibold rounded-lg shadow-md hover:bg-[#a470f5] transition-all">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
