import './campo-formulario.styles.css';

export function CampoFormulario({children}) {
  return (
    <fieldset className='campoFormulario'>
      {children}
    </fieldset>
  )
}