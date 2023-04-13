import { memo } from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from 'react-icons/ci'
import { IconContext } from 'react-icons/lib'
import styles from './SearchBar.module.css'

const SearchBar = ({ value, placeholder, name, onChange }) => (
  <div className={styles.search}>
    <input
      className={styles.search__input}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <IconContext.Provider value={{ className: styles.search__icon }}>
      <CiSearch />
    </IconContext.Provider>
  </div>
)

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
  placeholder: 'Enter a Product name...',
}

export default memo(SearchBar)
