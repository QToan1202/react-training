import './navigation.css'
import PropTypes from 'prop-types'
import { Link, Image } from '../index'

const Header = ({ logo, links, icons }) => (
  <div className="nav">
    <Image src={logo} alt="logo" />
    <div className="nav-item">
      {links.map((link, index) => (
        <Link key={index} to="javascript:void(0)">
          {link}
        </Link>
      ))}
    </div>
    <div className="nav-item shrink">
      {icons.map((ic, index) => (
        <div key={index} className="nav-icon">
          <Image src={ic} alt="Icon" />
        </div>
      ))}
    </div>
  </div>
)

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
}

export default Header
