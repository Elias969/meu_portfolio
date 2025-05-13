import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import Feedback from './components/Feedback';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white font-sans overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <main className="px-6 md:px-16 lg:px-32 py-16 space-y-20 z-10 relative">
  <Hero />
  <About />
  <Skills />
  <Timeline />
  <section id="projects">
    <h2 className="text-3xl font-bold mb-6 text-green-400">Meus Projetos</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card 
        title="Projeto 1" 
        description="Um blog focado em ergonomia digital, desenvolvido com HTML, CSS e JavaScript utilizando Flexbox." 
        link="https://github.com/Elias969/Web-Site-Blog-Ergonomia"
        image="/ergocode.png"
      />
      <Card 
        title="Projeto 2" 
        description="Projeto de marketplace online, onde usuários podem comprar e vender produtos." 
        link="https://github.com/Elias969/mercado"
        image="/mercado.png"
      />
      <Card 
        title="Projeto 3" 
        description="Aplicação de gerenciamento escolar com lançamento de notas, turmas e comunicados." 
        link="https://github.com/Elias969/mediotec-escolarweb"
        image="/escolar.png"
      />
    </div>
  </section>
  <Feedback />
  <section id="contato">
    <Contact />
  </section>
</main>
      <Footer />
    </div>
    
  );
}
