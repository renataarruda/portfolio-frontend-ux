import List from "../List/List";

const Tecnologies = () => {
  const TITLE = "Tecnologias";

  const techs = ["React", "Typescript", "Javascript", "HTML", "CSS", "Vitest", "MaterialUI"];

  return (
    <div>
      <List title={TITLE} listData={techs} />
    </div>
  );
};

export default Tecnologies;
