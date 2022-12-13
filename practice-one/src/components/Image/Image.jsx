import PropTypes from 'prop-types'

const Image = ({ width, height, src, alt }) => <img width={width} height={height} src={src} alt={alt} />

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default Image
