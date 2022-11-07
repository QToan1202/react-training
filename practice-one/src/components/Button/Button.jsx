import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {title, size, style} = this.props
    return (
      <button
        className={['btn',  `btn--${size}`, `btn--${style}`].join('  ')}
      >{title}</button>
    )
  }

}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.oneOf(['dark', 'warning'])
}

export default Button