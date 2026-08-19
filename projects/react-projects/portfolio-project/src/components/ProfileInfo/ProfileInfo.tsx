interface Props {
  nome: string;
  cargo: string;
  cidade: string;
  imageURL: string;
  imageSize: number;
}

const ProfileInfo = ({ nome, cargo, cidade, imageURL, imageSize }: Props) => {
  return (
    <div>
      <h1>{nome}</h1>
      <h2>{cargo}</h2>
      <h3>{cidade}</h3>
      <img
        className="avatar"
        src={imageURL}
        alt={"Imagem de " + nome}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </div>
  );
};

export default ProfileInfo;
