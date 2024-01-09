import HeaderLink from 'components/Header/HeaderLink/HeaderLink'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <HeaderLink to='/'>
          início
        </HeaderLink>
        <HeaderLink to='/sobremim'>
          sobre mim
        </HeaderLink>
        <HeaderLink to='/trabalhos'>
          trabalhos
        </HeaderLink>
        <HeaderLink to='/contato'>
          contato
        </HeaderLink>
      </nav>
    </header>
  )
}

export default Header
