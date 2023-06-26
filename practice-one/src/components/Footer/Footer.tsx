import './footer.css'
import Column from './Column'
import { Image, Text } from '../index'
import { IFooterProps } from '@types'

const Footer = ({ logo, notice, socialIcon, columns }: IFooterProps) => (
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

export default Footer
