import styles from './Home.module.scss'

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h1>oi, eu sou o Marcello!</h1>
        <p>
          sou um desenvolvedor web com uma quedinha por design, e a minha meta é
          te ajudar a realizar seus objetivos através de sites modernos e
          eficientes.
        </p>
      </div>
    </section>
  )
}

export default Home
