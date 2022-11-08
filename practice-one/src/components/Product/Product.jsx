import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './product.css'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {imageURL, title, content, price} = this.props
    return (
      <div className='card'>
        <img src={imageURL} alt="product-image" />
        <h2 className='card__title'>{title}</h2>
        <p>{content}</p>
        <span
          style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <p className='card__price'>${price}</p>
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