'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-32 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white">
          NOT JUST ANOTHER DEVELOPER.
        </h2>

        <div className="space-y-12 text-2xl md:text-4xl font-medium leading-relaxed tracking-wide text-gray-400">
          <motion.p
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-white"
          >
            I didn't start with resources. I started with curiosity. While most people were just using apps, I was trying to understand how they actually worked. I tried to find where the app broke.
          </motion.p>

          <motion.p
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Over the years, I've built many projects. From full-stack platforms to AI systems. With each thing I create I tried to solve a real world problem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            For most people, limitations are roadblocks. For me, they became a challenge. I design systems to optimize flows, build scalable architectures, and process complex AI models.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
