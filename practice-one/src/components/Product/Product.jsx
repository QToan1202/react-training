import React from 'react'
import PropTypes from 'prop-types'
import image from '../../assets/images/product.png'
import Button from '../Button/Button'
import './product.css'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='card'>
        <img src={image} alt="product-image" />
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <span style={{display: 'flex'}}>
          <p>${this.props.price}</p>
          <Button style="dark" size="small" />
        </span>
      </div>
    )
  }

}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Product