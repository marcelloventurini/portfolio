import styles from './Works.module.scss'

const Works = () => {
  return (
    <section className={styles.container}>
      <h1>esses são meus principais trabalhos</h1>
      <a
        href='https://github.com/marcelloventurini/to-do-list'
        target='_blank'
        className={styles.container__project}
      >
        todo list api
      </a>
      <p>
        projeto criado para praticar os conceitos de Node, Express e TypeScript
        vistos em cursos e documentações e aplicados aqui no contexto de uma API
        REST.
      </p>
      <a
        href='https://github.com/marcelloventurini/blog-api'
        target='_blank'
        className={styles.container__project}
      >
        blog api
      </a>
      <p>
        este é um projeto totalmente funcional para o gerenciamento de usuários
        e posts, no contexto de um blog, criado com o intuito de praticar Node,
        Express e TypeScript.
      </p>
    </section>
  )
}

export default Works
