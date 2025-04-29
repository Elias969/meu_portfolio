import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-10 text-gray-400 text-sm">
      © {new Date().getFullYear()} Elias. Todos os direitos reservados.
    </footer>
  );
}