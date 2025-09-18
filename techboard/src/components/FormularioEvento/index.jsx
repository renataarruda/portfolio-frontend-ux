import { TituloFormulario } from '../TituloFormulario';
import { CampoFormulario } from '../CampoFormulario';
import { Label } from '../Label';
import { Input } from '../Input';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';

import './form-evento.styles.css';

export function FormularioEvento(){
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campoformulario">
         <CampoFormulario>
        <Label htmlFor='nomeEvento'>
          Qual o nome do evento?
        </Label>
        <Input type='text' id='nomeEvento' placeholder='Summer dev hits' name='nomeEvento' />
      </CampoFormulario>
      <CampoFormulario>
        <Label htmlFor='dataEvento'>
          Data do evento
        </Label>
        <Input type='date' id='dataEvento' placeholder='XX/XX/XXXX' name='dataEvento' />
      </CampoFormulario>
      <CampoFormulario>
        <Label htmlFor='temaEvento'>
          Tema do evento
        </Label>
        <ListaSuspensa ></ListaSuspensa>
      </CampoFormulario>
      </div>
      <div className='actions'>
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}