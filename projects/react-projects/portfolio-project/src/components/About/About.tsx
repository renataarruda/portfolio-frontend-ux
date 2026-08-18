import './About.css'

const About = () => {

    const aboutMeTitle = "Sobre mim"

    const sobreMim = "Eu sou a Renata, ex-redatora que virou desenvolvedora de software.\nNo momento, atuo na área de Pesquisa, Desenvolvimento e Inovação desenvolvendo o front-end de aplicações para o setor de energia.\nMinhas tecnologias favoritas são o React e também gosto de UX.\nMeu objetivo é me tornar uma Front-End UX Engineer."

    return(
        <div>
            <h2>{aboutMeTitle}</h2>
            <p className="texto-quebrado">{sobreMim}</p>
        </div>
    )
}

export default About;