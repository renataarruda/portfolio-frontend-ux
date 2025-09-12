import { TituloFormulario } from '../TituloFormulario';
import { CampoFormulario } from '../CampoFormulario';
import { Label } from '../Label';
import { Input } from '../Input';

import './form-evento.styles.css';

export function FormularioEvento(){
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoFormulario>
        <Label htmlFor='nome'>
          Qual o nome do evento?
        </Label>
        <Input type='text' id='nome' placeholder='Summer dev hits' name='nomeEvento' />
      </CampoFormulario>
    </form>
  )
}