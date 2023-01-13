import styled from 'styled-components'
import PropTypes from 'prop-types'

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
  src: 'https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_960_720.jpg',
  alt: 'my image',
}

export default Image
