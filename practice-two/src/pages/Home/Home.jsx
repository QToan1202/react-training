import { memo, useCallback, useId } from 'react'
import useSWR from 'swr'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Input, Option, Product, SearchBar, Select, Tag } from '../../components'
import { Header } from '../../layouts'
import GET from '../../utils/fetcher'
import logo from '../../assets/logo.svg'
import styles from './Home.module.css'

const Home = () => {
  const { data: products, error, isLoading } = useSWR(import.meta.env.VITE_API_PRODUCTS, GET)
  const notifyId = useId()
  const handleNotifyError = useCallback(() => {
    toast.error(error.message, {
      toastId: notifyId, // Prevent duplicate toast
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    })
  }, [notifyId, error])
  const handleRenderProducts = useCallback(() => {
    if (error) return handleNotifyError()
    if (!isLoading) {
      return products?.map(({ id, name, description }) => <Product key={id} title={name} description={description} />)
    }
  }, [error, handleNotifyError, isLoading, products])

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
              <Option value="book" disabled label="Book" />
              <Option value="tablet" label="Tablet" />
            </Select>
          </div>
          <div>{handleRenderProducts()}</div>
        </div>
      </div>
    </>
  )
}

export default memo(Home)
