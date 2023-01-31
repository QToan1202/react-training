import { Header } from '../../layouts'
import styles from './Home.module.css'
import logo from '../../assets/logo.svg'
import { Input, Option, Product, SearchBar, Select, Tag } from '../../components'

const Home = () => {
  return (
    <>
      <Header logo={logo} />
      <div className={styles.container}>
        <SearchBar />
        <div>
          <div className={styles.filter}>
            <Input placeholder="Enter filter category" />
            <div className={styles.filter__tag}>
              <Tag>Book</Tag>
              <Tag>Tablet</Tag>
            </div>
            <Select defaultValue={1}>
              <Option value={1} disabled label="Book" />
              <Option value={2} label="Tablet" />
            </Select>
          </div>
          <div>
            <Product title="Product" description="product description" />
            <Product title="Product" description="product description" />
            <Product title="Product" description="product description" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
