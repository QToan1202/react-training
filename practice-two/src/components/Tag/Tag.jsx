import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.module.css'

const Tag = ({ title, onClick }) => {
  return (
    <div className={styles.tag}>
      <div className={styles.tag__content}>
        <p>{title}</p>
      </div>
      <button className={styles.tag__btn} onClick={onClick}>
        &#10006;
      </button>
    </div>
  )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default memo(Tag)
