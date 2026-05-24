'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 bg-black/50 backdrop-blur-md">
      <div className="font-bold text-xl tracking-wider">BHARDWAJ</div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider text-gray-300">
        <Link href="#about" className="hover:text-white transition-colors">ABOUT</Link>
        <Link href="#ai-mind" className="hover:text-white transition-colors">AI</Link>
        <Link href="#projects" className="hover:text-white transition-colors">PROJECTS</Link>
        <Link href="#contact" className="hover:text-white transition-colors">CONTACT</Link>
      </div>
    </nav>
  );
}
