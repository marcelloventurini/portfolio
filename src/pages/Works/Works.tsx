import WorkItem from './WorkItem/WorkItem'
import styles from './Works.module.scss'

const Works = () => {
  return (
    <section className={styles.container}>
      <h1>esses são meus principais trabalhos</h1>
      <WorkItem
        href='https://github.com/marcelloventurini/to-do-list'
        title='todo list'
        description='projeto criado para praticar os conceitos de Node, Express e TypeScript vistos em cursos e documentações e aplicados aqui no contexto de uma API REST.'
      />
      <WorkItem
        href='https://github.com/marcelloventurini/blog-api'
        title='blog api'
        description='este é um projeto totalmente funcional para o gerenciamento de usuários
        e posts, no contexto de um blog, criado com o intuito de praticar Node,
        Express e TypeScript.'
      />
    </section>
  )
}

export default Works
