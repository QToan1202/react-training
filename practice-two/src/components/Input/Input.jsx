import { memo, useId } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from './Input.module.css'

const Wrapper = styled.div`
  display: ${({ hasLabel }) => (hasLabel ? 'grid' : 'block')};
  grid-template-columns: 100px 1fr;
  column-gap: 5px;
`

const Input = ({ type, placeholder, autoComplete, label, register, config }) => {
  const id = useId()

  return (
    <Wrapper hasLabel={!!label}>
      {label ? (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(label, config)}
      />
    </Wrapper>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  register: PropTypes.func,
  config: PropTypes.object,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: 'off',
  register: () => undefined,
}

export default memo(Input)
