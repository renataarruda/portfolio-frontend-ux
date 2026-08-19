import GenericButton from "../../GenericButton/GenericButton";
import List from "../../List/List";

interface Props {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
}

//Passar o link

const ProjectCard = ({ nome, descricao, tecnologias, link }: Props) => {
  return (
    <div>
        <div>
          <h3>{nome}</h3>
          <div>{descricao}</div>
        </div>
        <List listData={tecnologias} />
        {link && <GenericButton title={"Ver Projeto"} />}
      </div>
  );
};

export default ProjectCard;
