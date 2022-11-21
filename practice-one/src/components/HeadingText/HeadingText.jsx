import PropTypes from 'prop-types'
import './headingText.css'

const HeadingText = ({ content, style }) => (
  <h2 className={style ? `heading heading--${style}` : 'heading'}>{content}</h2>
)

HeadingText.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.string,
}

export default HeadingText
