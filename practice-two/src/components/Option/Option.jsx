import { memo } from 'react'
import PropTypes from 'prop-types'

const Option = ({ value, label, disabled, hidden }) => (
  <option value={value} disabled={disabled} hidden={hidden}>
    {label}
  </option>
)

Option.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
}

Option.defaultProps = {
  disabled: false,
  hidden: false,
}

export default memo(Option)