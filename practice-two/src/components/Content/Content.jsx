import PropTypes from 'prop-types'
import styles from './Content.module.css'

const Content = ({ title, description }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.desc}>{description}</p>
  </div>
)

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Content.defaultProps = {
  title: '',
  description: '',
}

export default Content
