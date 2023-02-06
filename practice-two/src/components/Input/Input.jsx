import { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from './Input.module.css'

const Wrapper = styled.div`
  display: ${({ hasLabel }) => (hasLabel ? 'grid' : 'block')};
  grid-template-columns: 100px 270px;
  column-gap: 5px;
`

const Input = ({ type, placeholder, autoComplete, label, register, error }) => (
  <Wrapper hasLabel={!!label}>
    {label ? <label className={styles.label}>{label}</label> : null}
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...register(label, error)}
    />
  </Wrapper>
)

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: 'off',
}

export default memo(Input)
