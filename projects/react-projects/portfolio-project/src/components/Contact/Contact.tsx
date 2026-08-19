import { FaGithub, FaLinkedin } from "react-icons/fa";
import GenericButton from "../GenericButton/GenericButton";
import SocialLink from "../SocialLink/SocialLink";
import { MdEmail } from "react-icons/md";

  const contatos = {
    linkedIn: "https://linkedin.com/",
    github: "https://github.com/",
    email: "mailto:email@gmail.com",
  };

const Contact = () => {
  const TITLE = "Contato";

  const DESCRICAO = "Estou disponível para novos projetos. Vamos conversar?"

  const downloadButton = "Baixar currículo";

  return (
    <div>
      <h2>{TITLE}</h2>
      <h4>{DESCRICAO}</h4>
      <SocialLink redeSocial={contatos.linkedIn} Icon={FaLinkedin}/>
      <SocialLink redeSocial={contatos.github} Icon={FaGithub}/>
      <SocialLink redeSocial={contatos.email} Icon={MdEmail}/>
      <GenericButton title={downloadButton} />
    </div>
  );
};

export default Contact;
