import PropTypes from 'prop-types'
import './link.css'

export default function Link({to, children}) {
  return <a className='link' href={to}>{children}</a>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}