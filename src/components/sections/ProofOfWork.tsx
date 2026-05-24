'use client';
import SectionHeading from '../SectionHeading';

const milestones = [
  {
    age: "AGE 13",
    title: "CURIOSITY",
    desc: "Began breaking down software and learning the fundamentals of logic."
  },
  {
    age: "AGE 14",
    title: "WEB DEV",
    desc: "Built first production-ready websites and web tools."
  },
  {
    age: "AGE 15",
    title: "FULL STACK",
    desc: "Mastered React, Node, and database architecture."
  },
  {
    age: "AGE 16",
    title: "AI DEV",
    desc: "Started experimenting with transformer models, agentic AI, and tokenization."
  },
  {
    age: "AGE 17",
    title: "SYSTEM ARCHITECT",
    desc: "Designing scalable AI systems, founding ORIGIN AI, and building high-performance platforms."
  }
];

export default function ProofOfWork() {
  return (
    <section className="py-32 px-6 md:px-16 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="PROOF OF WORK" />

        <div className="mt-20 border-l-4 border-gray-800 pl-8 space-y-24">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[42px] top-2 w-6 h-6 bg-black border-4 border-orange-500 rounded-full" />
              <div className="text-orange-500 font-bold tracking-widest text-lg mb-2">{m.age}</div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{m.title}</h3>
              <p className="text-xl text-gray-400 font-medium">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
