import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button
        className={['btn',  `btn--${this.props.size}`, `btn--${this.props.style}`].join('  ')}
      >buy now</button>
    )
  }

}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.oneOf(['dark', 'warning'])
}

export default Button