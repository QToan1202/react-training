import React from 'react'
import './footer.css'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import Column from '../Column/Column'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {logo, notice, socialIcon, columns} = this.props

    return(
      <div className='footer'>
        <span className='footer__logo'>
          <Image src={logo} alt="footer-logo" />
        </span>
        <Column contents={columns} socialIcon={socialIcon} />
        <p className='footer__line'>{notice}</p>
      </div>
    )
  }

}

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  notice: PropTypes.string.isRequired,
  socialIcon: PropTypes.string.isRequired,
  columns: PropTypes.object.isRequired,
}

export default Footer