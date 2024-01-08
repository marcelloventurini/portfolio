import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/">início</Link>
        <Link to="/sobremim">sobre mim</Link>
        <Link to="#">trabalhos</Link>
        <Link to="#">links</Link>
      </nav>
    </header>
  )
}

export default Header
