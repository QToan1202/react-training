import PropTypes from 'prop-types';
import './description.css'

export default function Description({content, style}) {
  console.log(typeof `${style && `desc--${style}`}`);
  return (
    <p className={['desc',  `${style && `desc--${style}`}`].join('  ')}>
      {content}
    </p>
  )
}

Description.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.string,
}