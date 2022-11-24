import PropTypes from 'prop-types'
import './headingText.css'

const HeadingText = ({ content, type }) => (
  <h2 className={type ? `heading heading--${type}` : 'heading'}>{content}</h2>
)

HeadingText.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default HeadingText
