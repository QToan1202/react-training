import React from 'react'
import './navigation.css'
import PropTypes from 'prop-types'
import Link from '../Link/Link'
import Image from '../Image/Image'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {logo, links, icons} = this.props
    return(
      <div className='nav'>
        <Image src={logo} alt="logo" />
        <div className="nav-item">
          {links.map((link, index) => <Link key={index} to='javascript:void(0)'>{link}</Link>)}
        </div>
        <div className='nav-item  shrink'>
          {icons.map((ic, index) => <span key={index} className='nav-icon'><Image src={ic} alt='Icon' /></span>)}
        </div>
      </div>
    )
  }

}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired
}

export default Header