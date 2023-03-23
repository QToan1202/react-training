import { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import placeHolder from '../../assets/images/placeholder.jpg'

const ProductImage = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`

const Image = ({ width, height, src, alt }) => <ProductImage width={width} height={height} src={src} alt={alt} />

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

Image.defaultProps = {
  width: 252,
  height: 240,
  src: placeHolder,
  alt: 'my image',
}

export default memo(Image)
