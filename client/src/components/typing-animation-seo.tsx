import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Strategisch", "Nachhaltig", "Messbar"];

export default function TypingAnimationSeo() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        if (charIndex < fullWord.length) {
          setCurrentWord(fullWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentWord(fullWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 h-12 sm:h-14 md:h-16 flex items-center justify-center lg:justify-start">
      <span className="gradient-text">{currentWord}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-orange-500"
      >
        |
      </motion.span>
    </div>
  );
}