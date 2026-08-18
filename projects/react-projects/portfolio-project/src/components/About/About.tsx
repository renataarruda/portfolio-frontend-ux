import './About.css'

const About = () => {

    const aboutMeTitle = "Sobre mim"

    const sobreMim = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,\nthe librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."

    return(
        <div>
            <h2>{aboutMeTitle}</h2>
            <p className="texto-quebrado">{sobreMim}</p>
        </div>
    )
}

export default About;