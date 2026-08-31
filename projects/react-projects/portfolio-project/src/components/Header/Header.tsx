import { useState } from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import GenericButton from "../GenericButton/GenericButton";
import ToggleButton from "../ToggleButton/ToggleButton";

const TITLEVISITAS = "Visitas";

const user = {
  nome: "Renata Arruda",
  imageURL:
    "https://freepik.com.br/thumb.php?src=https%3A%2F%2Fimg.b2bpic.net%2Ffotos-gratis%2Fconceito-de-felicidade-bem-estar-e-confianca-mulher-afro-americana-atraente-alegre-corte-de-cabelo-encaracolado-peito-de-bracos-cruzados-em-pose-poderosa-e-segura-sorrindo-determinado-usar-sueter-amarelo_176420-35063.jpg&w=800",
  cargo: "Front-end Developer",
  cidade: "Rio de Janeiro",
  imageSize: 150,
};

const Header = () => {
  const [contador, setContador] = useState(0);
  const [isCurtido, setIsCurtido] = useState(false);

  const handleContador = () => {
    setContador(contador + 1);
  };

  const handleCurtida = () => {
    setIsCurtido(!isCurtido);
  }

  return (
    <div>
      <ProfileInfo
        nome={user.nome}
        imageURL={user.imageURL}
        cargo={user.cargo}
        cidade={user.cidade}
        imageSize={user.imageSize}
      />
      <GenericButton onClick={handleContador}>
        {TITLEVISITAS}: {contador}
      </GenericButton>
       <ToggleButton onClick={handleCurtida}>
        {isCurtido ? "♥ Curtido" : "♡ Curtir"}
      </ToggleButton>
    </div>
  );
};

export default Header;
