import './botao-form.styles.css';

/*
export function Botao(){
    return (
        <button className='botao' type="submit">Criar evento</button>
    )
}*/

export function Botao({ children }){
    return (
        <button className='botao'>
            { children }
        </button>
    )
}