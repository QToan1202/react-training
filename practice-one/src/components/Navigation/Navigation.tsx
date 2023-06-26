import './navigation.css'
import { Link, Image } from '../index'
import { INavigationProps } from '../../types/interfaces'

const Navigation = ({ logo, links, icons }: INavigationProps) => (
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

export default Navigation
