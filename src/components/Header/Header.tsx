import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a href="#">início</a>
        <a href="#">sobre mim</a>
        <a href="#">trabalhos</a>
        <a href="#">links</a>
      </nav>
    </header>
  )
}

export default Header
