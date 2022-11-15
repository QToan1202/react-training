import PropTypes from 'prop-types'

export default function Image({width, height, src, alt}) {
  return <img width={width} height={height} src={src} alt={alt} />
}

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}