import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './Content.module.css'

const Content = ({ title, description }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {description && <p className={styles.desc}>{description}</p>}
  </div>
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

Content.defaultProps = {
  description: '',
}

export default memo(Content)
