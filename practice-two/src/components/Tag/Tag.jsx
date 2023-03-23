import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.module.css'

const Tag = ({ children, onClick }) => {
  return (
    <div className={styles.tag}>
      <p className={styles.tag__label}>{children}</p>
      <button className={styles.tag__btn} onClick={onClick}>
        &#10006;
      </button>
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Tag.defaultProps = {
  children: 'Tag',
  onClick: () => void 0,
}

export default memo(Tag)
