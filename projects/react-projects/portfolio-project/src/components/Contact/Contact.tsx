import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GenericButton from "../GenericButton/GenericButton";

const Contact = () => {
  const TITLE = "Contato";

  const DESCRICAO = "Estou disponível para novos projetos. Vamos conversar?"

  const downloadButton = "Baixar currículo";

  const contato = {
    linkedIn: "https://linkedin.com/",
    github: "https://github.com/",
    email: "mailto:email@gmail.com",
  };

  return (
    <div>
      <h2>{TITLE}</h2>
      <h4>{DESCRICAO}</h4>
      <div>
        <a href={contato.linkedIn}>
          <FaLinkedin title="Linkedin" size={30} />
        </a>
        <a href={contato.github}>
          <FaGithub title="Github" size={30} />
        </a>
        <a href={contato.email}>
          <MdEmail title="Email" size={30} />
        </a>
      </div>
      <GenericButton title={downloadButton} />
    </div>
  );
};

export default Contact;
