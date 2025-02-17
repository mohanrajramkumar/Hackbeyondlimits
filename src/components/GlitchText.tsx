import { motion } from 'framer-motion';
import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute top-0 left-0 text-purple-500 opacity-70 transform translate-x-[1px] translate-y-[1px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 text-cyan-500 opacity-70 transform -translate-x-[1px] -translate-y-[1px]">
        {text}
      </span>
      <span className="relative text-white">{text}</span>
    </motion.div>
  );
};