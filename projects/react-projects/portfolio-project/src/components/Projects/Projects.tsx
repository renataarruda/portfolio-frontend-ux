import List from "../List/List";

const Projects = () => {
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

  return (
    <div>
      <h2>{TITLE}</h2>
      {projetos.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h3>{item.nome}</h3>
              <div>{item.descricao}</div>
            </div>
            <List listData={item.tecnologias} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
