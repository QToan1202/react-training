import PropTypes from 'prop-types';
import './headingText.css'

export default function HeadingText({content}) {
  return (
    <h2 className="heading">{content}</h2>
  )
}

HeadingText.propTypes = {
  content: PropTypes.string.isRequired,
}