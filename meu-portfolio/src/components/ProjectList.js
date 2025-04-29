import React from "react";
import Card from "./Card";

const projects = [
  { id: "p1", title: "Projeto 1", description: "Descrição breve do projeto 1." },
  { id: "p2", title: "Projeto 2", description: "Descrição breve do projeto 2." },
  { id: "p3", title: "Projeto 3", description: "Descrição breve do projeto 3." },
];

function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} title={project.title} description={project.description} />
      ))}
    </div>
  );
}

export default ProjectList;
