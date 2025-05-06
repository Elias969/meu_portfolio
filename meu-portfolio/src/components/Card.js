import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function Card({ title, description, link, image }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#233554] hover:border-green-400 transition"
      whileHover={{ scale: 1.05 }}
    >
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-2xl mb-4" />}
      <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.a>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string, // Adicionando a propriedade image
};

Card.defaultProps = {
  image: null, // Se não for passado, a imagem será null por padrão
};
