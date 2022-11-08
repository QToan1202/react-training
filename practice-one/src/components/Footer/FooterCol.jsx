import React from 'react'
import './footer.css'
import PropTypes from 'prop-types'
import FooterLink from './FooterLink'

class FooterCol extends React.Component {
  constructor(props) {
    super(props)
    this.products = ['headphones', 'earphones', 'speakers', 'accessories', 'beats audio', 'special offers']
    this.support = ['product help', 'service & warranty', 'register your beats', 'update your beats', 'authorized service providers', 'contact support', 'international numbers']
    this.company = ['product help', 'news and events', 'promotion terms', 'privacy policy', 'trademark', 'terms of use', 'cookies']
  }

  render() {
    const {title} = this.props
    return(
      <>
        <li><h3 className='footer__title' href="/">{title}</h3></li>
        {this[title]?.map((link, index) => <FooterLink key={index} content={link} />)}
      </>
    )
  }

}

FooterCol.propTypes = {
  title: PropTypes.string.isRequired
}


export default FooterCol