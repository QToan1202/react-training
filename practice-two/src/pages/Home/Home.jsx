import { Header } from '../../layouts'
import styles from './Home.module.css'
import logo from '../../assets/logo.svg'
import { Input, Option, Product, SearchBar, Select, Tag } from '../../components'
import { useId } from 'react'

// API fetch support
import useSWR from 'swr'
import GET from '../../utils/fetcher'
import { API_PRODUCTS } from '../../constants/url'

// Notification
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MESSAGES from '../../constants/messages'

const Home = () => {
  const { data: products, error } = useSWR(API_PRODUCTS, GET)
  const notifyId = useId()
  const notifyError = () => {
    toast.error(MESSAGES.GET_DATA_FAIL, {
      toastId: notifyId, // Prevent duplicate toast
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    })
  }

  return (
    <>
      <ToastContainer />
      <Header logo={logo} />
      <div className={styles.container}>
        <SearchBar />
        <div className={styles.col}>
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
            {!error
              ? products.map(({ id, name, description }) => <Product key={id} title={name} description={description} />)
              : notifyError()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
