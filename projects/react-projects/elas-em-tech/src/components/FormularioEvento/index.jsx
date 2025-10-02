import { useState } from 'react';

import { TituloFormulario } from "../TituloFormulario";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { Input } from "../Input";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

import "./form-evento.styles.css";

export function FormularioEvento({ temas, onSubmit }) {

  const [nomeEvento, setNomeEvento] = useState('');
  const [capa, setCapa] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [temaSelecionado, setTemaSelecionado] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const evento = {
      capa,
      tema: temas.find((item) => item.id == temaSelecionado),
      data: new Date(dataEvento + 'T00:00:00'),
      titulo: nomeEvento,
    };

    onSubmit(evento);

    setNomeEvento('');
    setCapa('');
    setDataEvento('');
    setTemaSelecionado('');
  }

    // const formData = new FormData(e.target);

    // const evento = {
    //   capa: formData.get('capa'),
    //   tema: temas.find(function (item){
    //     return item.id == formData.get('tema')
    //   }),
    //   data: new Date(formData.get('dataEvento') + 'T00:00:00'),
    //   titulo: formData.get('nomeEvento'),
    // };

  return (
    <form className="form-evento" onSubmit={handleSubmit}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campoformulario">
        <CampoFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <Input
            type="text"
            id="nomeEvento"
            value={nomeEvento}
            onChange={(e) => setNomeEvento(e.target.value)}
            placeholder="PrograMaria Summit"
            name="nomeEvento"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="capa">Adicione a imagem de capa:</Label>
          <Input
            type="text"
            id="capa"
            value={capa}
            placeholder=""
            name="capa"
            onChange={(e) => setCapa(e.target.value)}
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <Input
            type="date"
            id="dataEvento"
            placeholder="XX/XX/XXXX"
            name="dataEvento"
            value={dataEvento}
            onChange={(e) => setDataEvento(e.target.value)}
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa
          id="tema"
          name="tema"
          itens={temas}
          value={temaSelecionado}
          onChange={(e) => setTemaSelecionado(e.target.value)}
          ></ListaSuspensa>
        </CampoFormulario>
      </div>
      <div className="actions">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
