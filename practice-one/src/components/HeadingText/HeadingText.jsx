import PropTypes from 'prop-types';
import './headingText.css'

export default function HeadingText({content, style}) {
  return (
    <h2 className={style ? `heading  heading--${style}` : 'heading'}>{content}</h2>
  )
}

HeadingText.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.string
}