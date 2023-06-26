import styles from './Header.module.css'
import logo from '@assets/logo.svg'
import { IHeaderProps } from '@types'

const Header = ({ logo }: IHeaderProps) => (
  <header className={styles.header}>
    <img className={styles.header__logo} src={logo} alt="header-logo" loading="lazy" />
  </header>
)

Header.defaultProps = {
  logo: logo,
}

export default Header
