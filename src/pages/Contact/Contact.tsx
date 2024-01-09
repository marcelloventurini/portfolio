import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>entre em contato</h1>
      <a href='mailto:someone@example.com'>marcellofventurini@gmail.com</a>
      <p>(19) 99141 0277</p>
      <a href='https://www.linkedin.com/in/marcelloventurini/' target='_blank'>
        LinkedIn
      </a>
      <a href='https://github.com/marcelloventurini' target='_blank'>
        GitHub
      </a>
    </section>
  )
}

export default Contact
