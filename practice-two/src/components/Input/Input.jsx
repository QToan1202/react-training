import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from './Input.module.css'

const Wrapper = styled.div`
  display: ${({ hasLabel }) => (hasLabel ? 'grid' : 'block')};
  grid-template-columns: 100px 270px;
  column-gap: 5px;
`

const Input = ({ value, type, placeholder, autoComplete, label, name, onChange }) => (
  <Wrapper hasLabel={!!label}>
    {label ? <label className={styles.label}>{label}</label> : null}
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </Wrapper>
)

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: 'off',
}

export default Input
