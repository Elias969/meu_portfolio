import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Contato</h2>
      <div className="space-y-4 text-lg">
        <p><FaEnvelope className="inline mr-2 text-green-400" /> eliasasd321@gmail.com</p>
        <p><FaGithub className="inline mr-2 text-green-400" /> <a href="https://github.com/Elias969" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><FaLinkedin className="inline mr-2 text-green-400" /> <a href="https://www.linkedin.com/in/eliasramos10/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </section>
  );
}
