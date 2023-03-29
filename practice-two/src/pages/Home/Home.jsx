import { useCallback, useId, useState } from 'react'
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { Button, Input, LoadingSpinner, Option, Product, SearchBar, Select, Tag } from '@components'
import { productService } from '@services'
import { useDebounce } from '@hooks'
import { toastConfig } from '@utils'
import { MESSAGES } from '@constants'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS

const Home = () => {
  const { data: products, error, isLoading, mutate } = useSWR(API_PRODUCTS, productService.get)
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 1000)
  const { data: find } = useSWR(debouncedValue.length ? [API_PRODUCTS, debouncedValue] : null, ([path, query]) =>
    productService.find(path, query)
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
    (data) => {
      if (!data?.length) return <h1 className={styles.empty}>There no products yet</h1>

      return data?.map(({ id, name, description }) => {
        const handleActionDelete = () => handleDeleteProduct(id)

        return (
          <Product key={id} title={name} description={description}>
            <Button type="button" title="Delete" onClick={handleActionDelete} />
          </Product>
        )
      })
    },
    [handleDeleteProduct]
  )

  const handleChangeSearchValue = useCallback((e) => setSearchValue(e.target.value), [])

  if (isLoading) return <LoadingSpinner />
  if (error) return handleNotifyError(error)

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
          <Link to={'add-products'}>
            <Button title="Add new product" size="md" />
          </Link>
        </div>
        <div>{!searchValue.trim() ? renderProducts(products) : renderProducts(find)}</div>
      </div>
    </div>
  )
}

export default Home
