import PropTypes from 'prop-types';
import './price.css'

export default function Price({amount}) {
  return (
    <p className="price">&#36;{amount}</p>
  )
}

Price.propTypes = {
  amount: PropTypes.number.isRequired,
}