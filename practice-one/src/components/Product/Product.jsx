import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './product.css'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='card'>
        <img src={this.props.imageURL} alt="product-image" />
        <h2 className='card__title'>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <span
          style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <p className='card__price'>${this.props.price}</p>
          <Button style="dark" size="small" />
        </span>
      </div>
    )
  }

}

Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Product