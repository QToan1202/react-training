import { memo } from 'react'
import PropTypes from 'prop-types'
import ProductImage from './Image.styles'

const Image = ({ width, height, src, alt }) => <ProductImage width={width} height={height} src={src} alt={alt} />

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default memo(Image)
