import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { Input } from "../Input";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

import "./form-evento.styles.css";

export function FormularioEvento({ temas, onSubmit }) {

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item){
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento') + 'T00:00:00'),
      titulo: formData.get('nomeEvento'),
    };

    onSubmit(evento);

    formData.reset(evento);

   // e.target.reset();
  }

  return (
    <form className="form-evento" onSubmit={handleSubmit}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campoformulario">
        <CampoFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <Input
            type="text"
            id="nomeEvento"
            placeholder="PrograMaria Summit"
            name="nomeEvento"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="capa">Adicione uma capa:</Label>
          <Input
            type="text"
            id="capa"
            placeholder=""
            name="capa"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <Input
            type="date"
            id="dataEvento"
            placeholder="XX/XX/XXXX"
            name="dataEvento"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}></ListaSuspensa>
        </CampoFormulario>
      </div>
      <div className="actions">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
