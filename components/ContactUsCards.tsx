import { motion } from "framer-motion";
import { Play, MessageSquare } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 bg-[#0e0e0e] min-h-[60vh] px-4">
      {/* YouTube Card */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative group rounded-2xl p-8 w-full md:w-[480px] text-white overflow-hidden shadow-lg border border-white/10 transition-all duration-500 bg-gradient-to-br from-[#1a1a1a] to-[#111] hover:from-[#6b0000] hover:via-[#990000] hover:to-[#400000]"
      >
        {/* Animated Background Icon */}
        <motion.div
          initial={{ opacity: 0.05, scale: 1 }}
          whileHover={{ opacity: 0.2, scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 right-0 text-white/20 p-6"
        >
          <Play size={180} />
        </motion.div>

        {/* Background Line Animation */}
        <motion.div
          initial={{ opacity: 0.1 }}
          whileHover={{ opacity: 0.25 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 w-full h-20"
        >
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M0,160 C360,40 720,280 1080,160 C1260,100 1440,240 1440,240"
              className="text-red-500 group-hover:text-red-400 transition-colors duration-500"
            />
          </svg>
        </motion.div>

        <h2 className="text-5xl font-extrabold mb-3 text-gray-400 group-hover:text-[#ff4d4d] transition-colors duration-500">
          126K+
        </h2>
        <p className="text-gray-400 group-hover:text-gray-100 leading-relaxed max-w-sm transition-colors duration-500">
          With over 126K+ subscribers on YouTube, with almost 7 million views,
          with entire playlists dedicated to tech.
        </p>
      </motion.div>

      {/* Discord Card */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 w-full md:w-[300px] text-white overflow-hidden shadow-lg border border-white/10 hover:border-[#5865F2]/40 transition-all duration-500"
      >
        <motion.div
          initial={{ opacity: 0.05, y: 0 }}
          whileHover={{ opacity: 0.2, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 right-0 text-white/20 p-6"
        >
          <MessageSquare size={150} />
        </motion.div>

        <h2 className="text-5xl font-extrabold mb-3 text-gray-300 group-hover:text-white transition-colors duration-500">
          2.5K+
        </h2>
        <p className="text-gray-400 group-hover:text-gray-100 leading-relaxed max-w-sm transition-colors duration-500">
          Active members on Discord.
        </p>
      </motion.div>
    </div>
  );
}
