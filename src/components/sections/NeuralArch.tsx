'use client';
import SectionHeading from '../SectionHeading';

export default function NeuralArch() {
  return (
    <section id="ai-mind" className="py-32 px-6 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-500 font-bold tracking-widest text-sm rounded-full mb-8 border border-orange-500/50">
          NEURAL ARCHITECTURE
        </div>

        <SectionHeading title="INSIDE THE AI MIND." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold tracking-widest text-orange-500 mb-6">ATTENTION MECHANISM</h4>
              <div className="bg-gray-900 p-8 rounded-2xl font-mono text-xl md:text-2xl text-white border border-gray-800">
                Softmax(QKᵀ / √dₖ)V
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-widest text-orange-500 mb-6">INFORMATION FLOW</h4>
              <div className="bg-gray-900 p-8 rounded-2xl font-mono text-sm md:text-base text-gray-300 border border-gray-800 leading-relaxed tracking-wider">
                INPUT → TOKENIZER → EMBEDDING<br />
                → ATTENTION → OUTPUT → TRAINING LOSS
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold tracking-widest text-orange-500 mb-6">FEATURED SYSTEM</h4>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                <h5 className="text-3xl font-black mb-4">ORIGIN AI CORE</h5>
                <p className="text-gray-400 text-lg">
                  Blueprint-based AI system with task execution and modular system architecture. Designed for safe, agentic, and highly capable artificial intelligence systems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <h5 className="text-2xl font-black mb-2 text-orange-500">8B SCALE</h5>
                <p className="text-sm text-gray-400 font-bold tracking-wider">MEMORY-EFFICIENT TRAINING ARCHITECTURE</p>
              </div>
              <div className="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/30">
                <h5 className="text-2xl font-black mb-2 text-orange-400">64% REDUCTION</h5>
                <p className="text-sm text-orange-500/80 font-bold tracking-wider">VRAM USAGE OPTIMIZED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
