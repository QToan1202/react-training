import PropTypes from 'prop-types'
import styles from './Header.module.css'
import logo from '../../../src/assets/logo.svg'

const Header = ({ logo }) => (
  <header className={styles.header}>
    <img className={styles.header__logo} src={logo} alt="header-logo" loading="lazy" />
  </header>
)

Header.propTypes = {
  logo: PropTypes.string.isRequired,
}

Header.defaultProps = {
  logo: logo,
}

export default Header
