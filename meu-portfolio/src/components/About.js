import React from 'react';

export default function About() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Sobre Mim</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src="/elias.png" alt="Elias" className="w-40 h-40 rounded-full object-cover border-4 border-green-400" />
        <p className="text-lg text-gray-300 max-w-xl">
          Sou um estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia e inovação. Gosto de resolver problemas com código e transformar ideias em projetos reais.
          Tenho experiência com desenvolvimento web usando React, JavaScript, HTML, CSS, Tailwind e também backend com Node.js e Spring Boot.
        </p>
      </div>
    </section>
  );
}
