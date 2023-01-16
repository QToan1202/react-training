import PropTypes from 'prop-types'
import styles from './Tag.module.css'

const Tag = ({ label }) => (
  <div className={styles.tag}>
    <p>{label}</p>
    <button className={styles['tag-btn']}>&#10006;</button>
  </div>
)

Tag.propTypes = {
  label: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  label: 'Red',
}

export default Tag
