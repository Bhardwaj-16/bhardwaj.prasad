'use client';
import Marquee from '../Marquee';

export default function Hero() {
  const pills = [
    "AI SYSTEMS",
    "FULL STACK PLATFORMS",
    "AGENTIC AI",
    "SCALABLE APIS",
    "PRODUCTION-READY",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center">
        <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-400">
          HI, I'M BHARDWAJ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-12 text-left items-start">
          <p className="text-lg md:text-2xl font-medium tracking-wide text-gray-300">
            AI ENGINEER & FULL STACK DEVELOPER BUILDING REAL-WORLD SYSTEMS, NOT TUTORIALS
          </p>
          <div className="flex flex-col md:items-end space-y-8">
            <p className="text-lg md:text-2xl font-medium tracking-wide text-gray-300 md:text-right">
              FOUNDER AT ORIGIN AI, BUILDING SCALABLE PLATFORMS, AND PRODUCTION-READY PRODUCTS.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all bg-black rounded-full border-2 border-transparent hover:bg-orange-600/10 hover:border-orange-500"
              style={{
                boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)',
                borderColor: '#f97316'
              }}
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Marquee items={pills} />
      </div>
    </section>
  );
}
