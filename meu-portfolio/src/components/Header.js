import React from 'react';

export default function Header() {
  return (
   <header className="w-full py-6 px-6 md:px-16 lg:px-32 flex justify-between items-center bg-[#0a192f] z-20 relative">
  <h1 className="text-2xl font-bold text-green-400 typing-title">Elias.dev</h1>
  <nav className="space-x-6 text-sm">
        <a href="#projects" className="hover:text-green-400 transition">Projetos</a>
        <a href="#sobre" className="hover:text-green-400 transition">Sobre</a>
        <a href="#contato" className="hover:text-green-400 transition">Contato</a>
      </nav>
    </header>
  );
}