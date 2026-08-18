interface Props {
  title: string;
}

// const handleDownload = () => {
//   window.open("/arquivo.pdf", "_blank"); 
// }

const GenericButton = ({ title }: Props) => {
  return (
    <div>
      <a href="/arquivo.pdf" download="arquivo.pdf">
        <button 
        style={{cursor: "pointer"}}
        >{title}</button>
      </a>
    </div>
  );
};

export default GenericButton;
