import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r overflow-hidden from-black via-gray-900 to-black">
      {/* Parallax Background Effect */}
      <Parallax speed={-10} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/your-bg-image.jpg')] bg-cover bg-center opacity-40"></div>
      </Parallax>

      {/* Text Content with Motion Effects */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-[#00df9a] neon-text relative z-10 mt-6"
      >
        Only Notes - Free Study Materials & PDFs
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-lg md:text-xl max-w-2xl mt-4 text-white relative z-10"
      >
        Download **free educational PDFs, handwritten notes, and study guides** for exams, competitive tests, and academic learning.  
        Contribute your own notes and help students worldwide.
      </motion.p>

      {/* Buttons with Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="flex gap-4 mt-10 relative z-10"
      >
        <motion.a
          href="/notes"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#00df9a] text-black font-semibold rounded-lg hover:bg-[#00bf7a] transition duration-300 shadow-lg"
        >
          Browse Notes
        </motion.a>

        <motion.a
          href="/contribute"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-transparent border border-[#00df9a] text-[#00df9a] font-semibold rounded-lg hover:bg-[#00df9a] hover:text-black transition duration-300 shadow-lg"
        >
          Contribute Now
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
