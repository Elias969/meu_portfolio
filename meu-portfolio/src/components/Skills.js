import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPython, SiPostgresql, SiCsharp, SiFirebase } from 'react-icons/si';

const skills = [
  { icon: <FaReact size={30} />, name: 'React' },
  { icon: <FaHtml5 size={30} />, name: 'HTML5' },
  { icon: <FaCss3Alt size={30} />, name: 'CSS3' },
  { icon: <SiTailwindcss size={30} />, name: 'Tailwind' },
  { icon: <FaNodeJs size={30} />, name: 'Node.js' },
  { icon: <FaJava size={30} />, name: 'Java' },
  { icon: <SiMysql size={30} />, name: 'MySQL' },
  { icon: <FaGithub size={30} />, name: 'GitHub' },
  { icon: <SiPython size={30} />, name: 'Python' },
  { icon: <SiPostgresql size={30} />, name: 'PostgreSQL' },
  { icon: <SiCsharp size={30} />, name: 'C#' },
  { icon: <SiFirebase size={30} />, name: 'Firebase' },
];

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Minhas Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#112240] p-4 rounded-lg text-center hover:bg-green-400 hover:text-black transition"
          >
            <div className="flex justify-center mb-2">{skill.icon}</div>
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
