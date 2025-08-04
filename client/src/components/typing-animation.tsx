import { motion } from "framer-motion";

const hintWords = ["performance", "positioning", "presence", "impact", "visibility"];

export default function TypingAnimation() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 10,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-2 justify-center lg:justify-start"
    >
      {hintWords.map((word, index) => (
        <motion.span
          key={word}
          variants={item}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            index % 2 === 0 
              ? "bg-orange-500/10 text-orange-500 border border-orange-500/20" 
              : "bg-blue-600/10 text-blue-600 border border-blue-600/20"
          }`}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
          transition={{ duration: 0.2 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}