import React from 'react';
import { motion } from 'framer-motion';

interface CyberTextProps {
  text: string;
  className?: string;
}

export const CyberText: React.FC<CyberTextProps> = ({ text, className = '' }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={`relative group ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{
            textShadow: "0 0 10px #9333ea, 0 0 20px #9333ea, 0 0 40px #9333ea",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </motion.div>
  );
};