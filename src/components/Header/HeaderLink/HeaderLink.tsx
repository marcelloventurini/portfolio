import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './HeaderLink.module.scss'

interface HeaderLinkProps {
  to: string
  children: ReactNode
}

const HeaderLink = ({ children, to }: HeaderLinkProps) => {
  const location = useLocation()
  console.log(location)

  return (
    <Link
      className={`${styles.link} ${
        location.pathname === to ? styles.activeLink : ''
      }`}
      to={to}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
