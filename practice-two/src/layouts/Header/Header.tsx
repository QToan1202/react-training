import styles from './Header.module.css'
import img from '@assets/logo.svg'
import { IHeaderProps } from '@types'

const Header = ({ logo = img }: IHeaderProps) => (
  <header className={styles.header}>
    <img className={styles.header__logo} src={logo} alt="header-logo" loading="lazy" />
  </header>
)
export default Header
