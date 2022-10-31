import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.svg'
import social_icon from '../../assets/images/ic_social.svg'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='grid-container'>
        <img className='footer__logo' src={logo} alt="footer-logo" />
        <div>
          <h3 className='footer__title'>products</h3>
          <a className='footer__link' href="/">headphones</a>
          <a className='footer__link' href="/">earphones</a>
          <a className='footer__link' href="/">speakers</a>
          <a className='footer__link' href="/">accessories</a>
          <a className='footer__link' href="/">beats audio</a>
          <a className='footer__link' href="/">special offers</a>
        </div>
        <div>
          <h3 className='footer__title'>support</h3>
          <a className='footer__link' href="/">product help</a>
          <a className='footer__link' href="/">service & warranty</a>
          <a className='footer__link' href="/">register your beats</a>
          <a className='footer__link' href="/">update your beats</a>
          <a className='footer__link' href="/">authorized service providers</a>
          <a className='footer__link' href="/">contact support</a>
          <a className='footer__link' href="/">international numbers</a>
        </div>
        <div>
          <h3 className='footer__title'>company</h3>
          <a className='footer__link' href="/">product help</a>
          <a className='footer__link' href="/">news and events</a>
          <a className='footer__link' href="/">promotion terms</a>
          <a className='footer__link' href="/">privacy policy</a>
          <a className='footer__link' href="/">trademark</a>
          <a className='footer__link' href="/">terms of use</a>
          <a className='footer__link' href="/">cookies</a>
        </div>
        <div>
          <h3 className='footer__title'>follow us</h3>
          <img src={social_icon} alt="icon" />
        </div>
        <p className='footer__line'>Copyright &#169; 2020 Apple Inc. - All rights reserved.</p>
      </div>
    )
  }

}


export default Footer