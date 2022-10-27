import React from 'react'
import './header.css'
import logo from '../../assets/images/logo.svg'
import ic_user from '../../assets/images/ic_user.svg'
import ic_search from '../../assets/images/ic_search.svg'
import ic_cart from '../../assets/images/ic_cart.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='nav'>
        <img src={logo} alt="logo" />
        <div style={{margin:'auto'}}>
          <a className='nav-link' href="javascript:void(0)">headphones</a>
          <a className='nav-link' href="javascript:void(0)">earphones</a>
          <a className='nav-link' href="javascript:void(0)">speakers</a>
          <a className='nav-link' href="javascript:void(0)">explore</a>
        </div>
        <div style={{margin:'auto 0'}}>
          <img className='icon' src={ic_search} alt="search" />
          <img className='icon' src={ic_user} alt="user" />
          <img className='icon' src={ic_cart} alt="cart" />
        </div>
      </div>
    )
  }

}


export default Header