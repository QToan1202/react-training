import React from 'react'
import './footer.css'
import PropTypes from 'prop-types'

class FooterLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {content} = this.props
    return(
      <li><a className='footer__link' href="/">{content}</a></li>
    )
  }

}

FooterLink.propTypes = {
  content: PropTypes.string.isRequired
}


export default FooterLink