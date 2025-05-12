import React from 'react';

const timeline = [
  { year: '2020', title: 'Início na programação', description: 'Comecei a estudar programação e lógica.' },
  { year: '2023', title: 'Projetos pessoais', description: 'Desenvolvi sites como blogs, sistemas escolares e marketplace.' },
  { year: '2025', title: 'Foco em backend', description: 'Estudando Spring Boot e aprofundando em arquitetura de APIs.' },
];

export default function Timeline() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Minha Jornada</h2>
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="border-l-4 border-green-400 pl-6">
            <h3 className="text-xl font-bold">{item.year} - {item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}