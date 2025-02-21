import React, { useRef } from "react";
import { AiOutlineCloudDownload, AiOutlineBook, AiOutlineUsergroupAdd } from "react-icons/ai";
import { motion, useInView } from "framer-motion";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { id: 1, icon: <AiOutlineCloudDownload size={40} />, text: "Download Free PDFs" },
    { id: 2, icon: <AiOutlineBook size={40} />, text: "Notes on Various Subjects" },
    { id: 3, icon: <AiOutlineUsergroupAdd size={40} />, text: "Open Source & Community Driven" },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Notesly has been a game-changer for my studies. The free PDFs and notes are incredibly helpful!",
      author: "John Doe",
      role: "Student",
    },
    {
      id: 2,
      quote: "I love how easy it is to find high-quality resources on Notesly. Highly recommended!",
      author: "Jane Smith",
      role: "Educator",
    },
    {
      id: 3,
      quote: "The community-driven approach makes Notesly stand out. It's a must-have resource for learners.",
      author: "Alex Johnson",
      role: "Developer",
    },
  ];

  return (
    <div ref={ref} className="py-16 px-6 text-center text-white bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-[#00df9a] mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Why Use Notesly?
      </motion.h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="p-8 bg-gray-800 rounded-xl border-2 border-transparent hover:border-[#00df9a] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,223,154,0.6)] relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00df9a] to-[#00df9a] opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            {/* Icon */}
            <div className="text-[#00df9a] mb-4 hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>
            {/* Text */}
            <p className="text-xl font-medium mt-4 hover:text-[#00df9a] transition-colors duration-300">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg text-gray-300 mb-6">
          Join thousands of learners and educators who are already benefiting from Notesly. Start your journey today!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-[#00df9a] text-black font-semibold rounded-lg hover:bg-[#00bf7a] transition-colors duration-300"
        >
          Get Started Now
        </a>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-3xl font-bold text-[#00df9a] mb-8">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="p-6 bg-gray-800 rounded-xl border-2 border-transparent hover:border-[#00df9a] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,223,154,0.6)]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
              <p className="mt-4 text-[#00df9a] font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Benefits;