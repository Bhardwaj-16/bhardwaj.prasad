'use client';
import SectionHeading from '../SectionHeading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    num: "01",
    type: "FEATURED STARTUP",
    title: "ORIGIN AI",
    desc: "We are an AI company built by Indian Founders with an aim to provide accessible and affordable AI to everyone. Building a modular, multi-model AI system that blends human and artificial intelligence into a proactive, secure, and autonomous assistant.",
    link: "https://origin-corp.vercel.app/"
  },
  {
    num: "02",
    type: "FEATURED PLATFORM",
    title: "ORIGIN MINI",
    desc: "A cost-effective web platform aggregating multiple AI chatbots with unique multi-AI collaboration features.",
    link: "https://origin-corp.vercel.app/projects/01"
  },
  {
    num: "03",
    type: "AI SYSTEM",
    title: "ORIGIN AGENT",
    desc: "An Agentic AI system which does tasks for you instead of just talking to you. You give it a goal and it finishes it instead of telling YOU how to do it. It is your coworker instead of an instructor.",
    link: "https://origin-corp.vercel.app/projects/02"
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="py-32 px-6 md:px-16 bg-black text-white relative">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading title="THINGS I'VE BUILT." />

        <div className="mt-24 w-full max-w-5xl mx-auto">
          {projects.map((proj, idx) => {
            const targetScale = 1 - ((projects.length - idx) * 0.05);
            return (
              <Card
                key={idx}
                i={idx}
                project={proj}
                progress={scrollYProgress}
                range={[idx * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ i, project, progress, range, targetScale }: any) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(10vh + ${i * 40}px)` }}
        className="relative w-full h-[400px] md:h-[500px] bg-gray-900 rounded-[3rem] border border-gray-800 p-8 md:p-16 shadow-2xl flex flex-col justify-between origin-top"
      >
        <div>
        <div className="flex justify-between items-center mb-8">
          <span className="text-4xl md:text-6xl font-black text-orange-500">{project.num}</span>
          <span className="text-sm md:text-base font-bold tracking-widest text-gray-400">{project.type}</span>
        </div>
        <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6">{project.title}</h3>
        <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-3xl leading-relaxed">
          {project.desc}
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-black uppercase transition-all bg-white rounded-full hover:bg-orange-500 hover:text-white"
        >
          VIEW PROJECT
        </a>
      </div>
    </motion.div>
    </div>
  );
}
