import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Olá, eu sou Elias 👋</h1>
      <p className="text-xl text-gray-300 max-w-xl mb-6">
        Desenvolvedor fullstack com foco em criar experiências e sistemas modernos, rápidos e acessíveis. Apaixonado por tecnologia e soluções criativas.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition">Ver Projetos</a>
        <a href="/curriculo_elias_ramos.pdf" download className="border border-green-400 px-6 py-2 rounded-lg hover:bg-green-400 hover:text-black transition">Download CV</a>
      </div>
    </section>
  );
}
