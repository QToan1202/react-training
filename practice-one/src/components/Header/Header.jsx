import React from 'react'
import './header.css'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {logo, links, icons} = this.props
    return(
      <div className='nav'>
        <img src={logo} alt="logo" />
        <div style={{margin:'auto'}}>
          {links.map((link, index) => <a className='nav-link' key={index} href="javascript:void(0)">{link}</a>)}
        </div>
        <div style={{margin:'auto 0'}}>
          {icons.map((ic, index) => <img className='icon' key={index} src={ic} alt="icon" />)}
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