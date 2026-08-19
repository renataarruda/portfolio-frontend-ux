import ProjectCard from "./ProjectCard/ProjectCard";

const TITLE = "Projetos";

const projetos = [
  {
    id: "id-01",
    nome: "Sistema Biblioteca",
    descricao: "Aplicação React para gerenciamento de livros.",
    tecnologias: ["React", "Typescript", "Material UI"],
  },
  {
    id: "id-02",
    nome: "Lista de Tarefas",
    descricao: "Aplicação React para gerenciamento de tarefas.",
    tecnologias: ["React", "Typescript", "Material UI"],
  },
  {
    id: "id-03",
    nome: "Pomodoro",
    descricao: "Aplicação React para gerenciamento de tempo.",
    tecnologias: ["React", "Typescript", "Material UI"],
  },
];

const Projects = () => {
  const listItems = projetos.map((projeto) => (
    <ProjectCard
      key={projeto.id}
      nome={projeto.nome}
      descricao={projeto.descricao}
      tecnologias={projeto.tecnologias}
    />
  ));

  return (
    <div>
      <h2>{TITLE}</h2>
      {listItems}
    </div>
  );
};

export default Projects;
