import PropTypes from 'prop-types';
import './text.css';

const Text = ({ children, size, weight, color, leading }) => {
  const styleClass = ['text'];

  leading && styleClass.push(`leading-${leading}`);
  color && styleClass.push(`text-${color}`);
  weight && styleClass.push(`text-${weight}`);
  size && styleClass.push(`text-${size}`);

  return <p className={styleClass.join(' ')}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(['xl', '2xl','3xl', '4xl','5xl']),
  weight: PropTypes.oneOf(['normal', 'medium', 'semibold']),
  color: PropTypes.oneOf(['black', 'white', 'yellow-400', 'yellow-700']),
  leading: PropTypes.oneOf(['normal', 'relaxed', 'loose', 'extra-loose']),
};

export default Text
