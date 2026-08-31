import { useState } from "react";
import List from "../List/List";
import ToggleButton from "../ToggleButton/ToggleButton";

const TITLE = "Tecnologias";

const techs = [
  "React",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "Vitest",
  "MaterialUI",
];


const Technologies = () => {
  // const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
   
};


  return (
    <div>
      <h2>{TITLE}</h2>
      {isVisible && <List listData={techs} />}
     <ToggleButton onClick={handleClick}>
      {isVisible ? "Ocultar Tecnologias" : "Mostrar Tecnologias"}
      </ToggleButton>
    </div>
  );
};

export default Technologies;
