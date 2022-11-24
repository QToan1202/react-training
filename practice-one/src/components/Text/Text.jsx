import PropTypes from 'prop-types'
import './text.css'

const Text = ({ children, weight, color, price, priceSection }) => {
  const styleClass = ['text']

  color && styleClass.push(`text-${color}`)
  weight && styleClass.push(`text-${weight}`)
  price && styleClass.push('text--price')
  priceSection && styleClass.push('text--price-section')

  return <p className={styleClass.join(' ')}>{children}</p>
}

Text.propTypes = {
  children: PropTypes.any,
  weight: PropTypes.oneOf(['normal', 'medium', 'semibold']),
  color: PropTypes.oneOf(['black', 'white', 'yellow-400', 'yellow-700']),
  price: PropTypes.bool,
  priceSection: PropTypes.bool,
}

export default Text
