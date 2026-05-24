'use client';

const skills = [
  { name: "Transformer Architecture", percent: "95%" },
  { name: "Tokenization Systems", percent: "90%" },
  { name: "Dataset Optimization", percent: "98%" },
  { name: "Neural Networks", percent: "85%" },
  { name: "React / Next.js UI", percent: "98%" },
  { name: "Node.js / Backend", percent: "92%" },
  { name: "Scalable Architecture", percent: "94%" },
  { name: "Performance Optimization", percent: "96%" },
];

const tags = [
  "REACT", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "PYTHON", "PYTORCH", "LANGCHAIN", "POSTGRESQL", "DOCKER", "TAILWIND"
];

export default function EngineeringStack() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-16 rounded-[3rem] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-black">
            ENGINEERING STACK.
          </h2>
          <p className="text-xl md:text-2xl font-bold tracking-wide text-gray-500 mb-12 uppercase">
            MY SKILL SET IS NOT A CHECKLIST. IT REPRESENTS MY PASSION FOR AI.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-gray-100 p-6 rounded-2xl">
              <div className="text-3xl font-black text-orange-500 mb-2">20+</div>
              <div className="text-sm font-bold tracking-wider text-gray-600">MAJOR PROJECTS</div>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl">
              <div className="text-3xl font-black text-orange-500 mb-2">AI</div>
              <div className="text-sm font-bold tracking-wider text-gray-600">RESEARCH FOCUS</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-black text-white text-xs font-bold tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <div className="flex justify-between font-bold text-lg tracking-wider">
                <span>{skill.name}</span>
                <span className="text-orange-500">{skill.percent}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-600 to-yellow-400 h-full rounded-full"
                  style={{ width: skill.percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
