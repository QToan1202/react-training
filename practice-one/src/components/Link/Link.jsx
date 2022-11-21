import PropTypes from 'prop-types'
import './link.css'

export default function Link({to, children, style}) {
  return <a className={style ? `link  link--${style}` : 'link'} href={to}>{children}</a>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  style: PropTypes.string,
}