import { memo, useCallback, useId } from 'react'
import useSWR from 'swr'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button, Input, Option, Product, SearchBar, Select, Tag } from '../../components'
import { Header } from '../../layouts'
import logo from '../../assets/logo.svg'
import productService from '../../services/product'
import { AddProduct } from '../index'
import styles from './Home.module.css'

const Home = () => {
  const { data: products, error, isLoading, mutate } = useSWR(import.meta.env.VITE_API_PRODUCTS, productService.get)
  const notifyId = useId()
  const handleNotifyError = useCallback(
    (error) => {
      toast.error(error.message, {
        toastId: notifyId, // Prevent duplicate toast
        position: toast.POSITION.TOP_CENTER,
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      })
    },
    [notifyId]
  )
  const handleDeleteProduct = useCallback(
    async (id) => {
      const remainProducts = products.filter((item) => item.id !== id)
      await productService.remove(id)
      mutate([...products, remainProducts])
    },
    [mutate, products]
  )
  const handleRenderProducts = useCallback(
    (data, error, loading) => {
      if (error) return handleNotifyError(error)
      if (!loading) {
        return data?.map(({ id, name, description }) => (
          <Product key={id} title={name} description={description}>
            <Button type="button" title="Delete" onClick={() => handleDeleteProduct(id)} />
          </Product>
        ))
      }
    },
    [handleNotifyError, handleDeleteProduct]
  )

  return (
    <>
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
            <Select defaultValue="book">
              <Option value="book" disabled label="Book" />
              <Option value="tablet" label="Tablet" />
            </Select>
          </div>
          <div>
            {handleRenderProducts(products, error, isLoading)}
            <AddProduct />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default memo(Home)
