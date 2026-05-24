'use client';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: "01 AI SYSTEMS & AGENTS",
    desc: "Agentic AI systems, workflow experiments, language models integration, and system-level AI architecture."
  },
  {
    title: "02 FULL STACK PLATFORMS",
    desc: "Production-ready web platforms with React, Next.js, backend logic, authentication, dashboards, APIs, and scalable database structure."
  },
  {
    title: "03 HIGH-CONVERSION WEBSITES",
    desc: "Premium frontend websites with strong UI/UX, clean typography, fast performance, and conversion-focused layouts for businesses and brands."
  },
  {
    title: "04 ECOMMERCE SYSTEMS",
    desc: "Full eCommerce platforms with product architecture, admin dashboard, real-time order management, and scalable business operations."
  },
  {
    title: "05 SCALABLE INFRASTRUCTURE",
    desc: "Deployments, cloud infrastructure, Docker, performance optimization, and modular system design."
  }
];

export default function WhatIBuild() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-16 rounded-[3rem] -mt-10 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-2xl md:text-4xl font-bold tracking-widest text-orange-500 mb-8 max-w-4xl mx-auto">
            "CONSTRAINTS DON'T LIMIT ENGINEERING. THEY DEFINE BETTER ARCHITECTURE."
          </h3>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white font-bold tracking-widest uppercase rounded-full hover:bg-orange-500 transition-colors"
          >
            CONTACT ME
          </a>
        </div>

        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16">
          WHAT I BUILD
        </h2>

        <div className="flex flex-col border-t-2 border-black">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="py-12 border-b-2 border-black flex flex-col md:flex-row md:items-center justify-between group cursor-pointer hover:bg-orange-50 transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 md:mb-0 w-full md:w-1/3 group-hover:text-orange-500 transition-colors">
                {cap.title}
              </h3>
              <p className="text-lg md:text-xl font-medium text-gray-700 w-full md:w-1/2">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
