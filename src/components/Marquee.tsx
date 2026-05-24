'use client';
import { motion } from 'framer-motion';

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-4 border-t border-b border-white/10 flex">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="text-xl md:text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              {item}
            </span>
            <span className="text-orange-500 text-xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
