import React from 'react'
import './footer.css'
import FooterCol from './FooterCol'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {logo, notice, socialIcon} = this.props
    return(
      <div className='container'>
        <img className='footer__logo' src={logo} alt="footer-logo" />
        <ul className='footer__col'>
          <FooterCol title='products' />
        </ul>
        <ul className='footer__col'>
          <FooterCol title='support' />
        </ul>
        <ul className='footer__col'>
          <FooterCol title='company' />
        </ul>
        <ul className='footer__col'>
          <FooterCol title='follow us' />
          <img src={socialIcon} alt="social icon" />
        </ul>
        <p className='footer__line'>{notice}</p>
      </div>
    )
  }

}

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  notice: PropTypes.string.isRequired,
  socialIcon: PropTypes.string.isRequired
}

export default Footer