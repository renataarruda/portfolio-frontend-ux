import './App.css'

function FormularioEvento(){

  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor='nome'>
          Qual o nome do evento?
        </label>
        <input type='text' id='nome' />
      </fieldset>
    </form>
  )
}

function App() {

  return (
   <main>
    <header>
      <img src="/logo.png" />
    </header>
    <section>
      <img src="/banner.png" />
    </section>
    <FormularioEvento />
   </main>
  )
}

export default App
