import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatIBuild from '@/components/sections/WhatIBuild';
import NeuralArch from '@/components/sections/NeuralArch';
import EngineeringStack from '@/components/sections/EngineeringStack';
import ProofOfWork from '@/components/sections/ProofOfWork';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-orange-500/30">
      <Navbar />
      <Hero />
      <About />
      <WhatIBuild />
      <NeuralArch />
      <EngineeringStack />
      <ProofOfWork />
      <Projects />
      <Footer />
    </main>
  );
}
