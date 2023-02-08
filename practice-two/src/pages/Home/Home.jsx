import { memo, useCallback, useId, useState } from 'react'
import useSWR from 'swr'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button, Input, LoadingSpinner, Option, Product, SearchBar, Select, Tag } from '../../components'
import { Header } from '../../layouts'
import logo from '../../assets/logo.svg'
import productService from '../../services/product'
import useDebounce from '../../hooks/useDebounce'
import { AddProduct } from '../index'
import styles from './Home.module.css'
import MESSAGES from '../../constants/messages'

const Home = () => {
  const { data: products, error, isLoading, mutate } = useSWR(import.meta.env.VITE_API_PRODUCTS, productService.get)
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 1000)
  const {
    data: find,
    error: e,
    isLoading: searching,
  } = useSWR([import.meta.env.VITE_API_PRODUCTS, debouncedValue], ([path, query]) => productService.find(path, query))
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
      const status = await productService.remove(id)

      if (status !== 200) return handleNotifyError(MESSAGES.DELETE_FAILED)
      mutate(remainProducts, {
        revalidate: false,
      })
    },
    [products, handleNotifyError]
  )
  const renderProducts = useCallback(
    (data) =>
      data?.map(({ id, name, description }) => {
        const handleActionDelete = () => handleDeleteProduct(id)

        return (
          <Product key={id} title={name} description={description}>
            <Button type="button" title="Delete" onClick={handleActionDelete} />
          </Product>
        )
      }),
    [handleDeleteProduct]
  )
  const preRenderCheck = useCallback(
    (data, error, loading) => {
      if (loading) return <LoadingSpinner />
      if (error) return handleNotifyError(error)
      if (data?.length) return renderProducts(data)
      return <h1 className={styles.empty}>There no products yet</h1>
    },
    [handleNotifyError, renderProducts]
  )
  const handleChangeSearchValue = useCallback((e) => setSearchValue(e.target.value), [])

  return (
    <>
      <Header logo={logo} />
      <div className={styles.container}>
        <SearchBar value={searchValue} onChange={handleChangeSearchValue} />
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
            <AddProduct />
            {!searchValue.trim() ? preRenderCheck(products, error, isLoading) : preRenderCheck(find, e, searching)}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default memo(Home)
