import { useCallback, useId, useState } from 'react'
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { Button, Input, LoadingSpinner, Option, Product, SearchBar, Select, Tag } from '../../components'
import productService from '../../services/product'
import useDebounce from '../../hooks/useDebounce'
import { AddProduct } from '../../layouts'
import styles from './Home.module.css'
import MESSAGES from '../../constants/messages'
import toastConfig from '../../utils/toastConfig'

const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS

const Home = () => {
  const { data: products, error, isLoading, mutate } = useSWR(API_PRODUCTS, productService.get)
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 1000)
  const { data: find, error: searchError } = useSWR(
    debouncedValue.length ? [API_PRODUCTS, debouncedValue] : null,
    ([path, query]) => productService.find(path, query)
  )
  const notifyId = useId()

  const handleNotifyError = useCallback(
    (error) => {
      toast.error(error.message, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
    },
    [notifyId]
  )

  const handleDeleteProduct = useCallback(
    async (id) => {
      const remainProducts = products.filter((item) => item.id !== id)
      const status = await productService.remove(id)

      if (status !== 200) return handleNotifyError(MESSAGES.DELETE_FAILED)
      toast.success(MESSAGES.DELETE_SUCCESS, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
      mutate(remainProducts, {
        revalidate: false,
      })
    },
    [products, handleNotifyError, notifyId, mutate]
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
          {!searchValue.trim() ? preRenderCheck(products, error, isLoading) : preRenderCheck(find, searchError, !find)}
        </div>
      </div>
    </div>
  )
}

export default Home
