import { Link } from 'react-router-dom'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <h1>olá, mundo!</h1>
      <div className={styles.container__text}>
        <p>
          meu nome é Marcello Venturini, eu tenho 30 anos e estou no último
          semestre da faculdade de Análise e Desenvolvimento de Sistemas.
        </p>
        <p>
          eu sou um desenvolvedor web com foco em frontend, mas com conhecimento
          nas principais tecnologias backend.
        </p>
        <p>
          atualmente trabalho com as principais tecnologias do ecossistema
          JavaScript: React, Node e TypeScript.
        </p>
        <p>
          além da programação, também procuro dedicar uma parcela do meu tempo à
          outra área que sempre me despertou muito interesse: o design.
        </p>
        <p>
          se você tiver alguma dúvida, sugestão, interesse pelo meu trabalho, ou
          quiser apenas dar um “oi” ou trocar uma ideia, sinta-se livre para
          entrar em <Link to='/contato'>contato</Link> comigo!
        </p>
      </div>
    </section>
  )
}

export default AboutMe
