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

  return (
    <div ref={ref} className="py-16 px-6 text-center text-white bg-gradient-to-r from-black via-gray-900 to-black ">
      <h2 className="text-4xl font-bold text-[#00df9a] mb-12">
        Why Use Only Notes?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="p-8 bg-gray-800 rounded-xl border-2 border-transparent hover:border-[#00df9a] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,223,154,0.6)] relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00df9a] to-[#00df9a] opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            <div className="text-[#00df9a] mb-4 hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>
            <p className="text-xl font-medium mt-4 hover:text-[#00df9a] transition-colors duration-300">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
