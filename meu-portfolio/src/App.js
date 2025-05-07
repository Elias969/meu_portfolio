import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white font-sans overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <main className="px-6 md:px-16 lg:px-32 py-16 space-y-12 z-10 relative">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-green-400">Meus Projetos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Projeto 1" 
              description="Um blog focado em ergonomia digital, desenvolvido com HTML, CSS e JavaScript utilizando Flexbox." 
              link="https://github.com/Elias969/Web-Site-Blog-Ergonomia"
              image="/ergocode.png" // Caminho relativo para a imagem
            />
            <Card 
              title="Projeto 2" 
              description="Projeto de marketplace online, onde usuários podem comprar e vender produtos de forma simples e segura. Desenvolvido com React no frontend e Python no backend, garantindo uma experiência fluida e escalável."
              link="https://github.com/Elias969/mercado"
              image="/mercado.png" // Exemplo de URL externa para imagem
            />
            <Card 
              title="Projeto 3" 
              description="Projeto de um aplicação de gerenciamento escolar, onde contem professores, alunos e administradores. na aplicação tem varios opções como lançamento de notas, disciplinas, turmas, comunicados e alunos. "
              link="https://github.com/Elias969/mediotec-escolarweb"
              image="/escolar.png" // Exemplo de URL externa para imagem
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
