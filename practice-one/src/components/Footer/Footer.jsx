import './footer.css'
import PropTypes from 'prop-types'
import Column from './Column'
import { Image, Text } from '../index'

const Footer = ({ logo, notice, socialIcon, columns }) => (
  <div className="footer">
    <div className="footer__logo">
      <Image src={logo} alt="footer-logo" />
    </div>
    <Column contents={columns} socialIcon={socialIcon} />
    <div className="footer__line">
      <Text>{notice}</Text>
    </div>
  </div>
)

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  notice: PropTypes.string.isRequired,
  socialIcon: PropTypes.string.isRequired,
  columns: PropTypes.object.isRequired,
}

export default Footer
