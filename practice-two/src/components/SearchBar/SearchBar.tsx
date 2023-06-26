import { memo } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IconContext } from 'react-icons/lib'
import styles from './SearchBar.module.css'
import { ISearchBarProps } from '@types'

const SearchBar = ({ value, placeholder, name, onChange }: ISearchBarProps) => (
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

SearchBar.defaultProps = {
  placeholder: 'Enter a Product name...',
}

export default memo(SearchBar)
