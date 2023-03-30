import { useCallback, useId, useState } from 'react'
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Button, Input, LoadingSpinner, Option, Popup, Product, SearchBar, Select, Tag } from '@components'
import { productService } from '@services'
import { useDebounce } from '@hooks'
import { toastConfig } from '@utils'
import { MESSAGES } from '@constants'
import styles from './Home.module.css'

const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS

const Home = () => {
  const { data: products, error, isLoading, mutate } = useSWR(API_PRODUCTS, productService.get)
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 1000)
  const { data: find, isLoading: isFinding } = useSWR(
    debouncedValue.length ? [API_PRODUCTS, debouncedValue] : null,
    ([path, query]) => productService.find(path, query)
  )
  const notifyId = useId()
  const [showDialog, setShowDialog] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState(undefined)

  const handleNotifyError = useCallback(
    (error) => {
      toast.error(error.message, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
    },
    [notifyId]
  )

  const handleDeleteProduct = useCallback((id) => {
    setShowDialog(true)
    setSelectedProductId(id)
  }, [])

  const handleCancel = useCallback(() => setShowDialog(false), [])

  const handleConfirm = useCallback(async () => {
    const remainProducts = products.filter((item) => item.id !== selectedProductId)
    const status = await productService.remove(selectedProductId)

    if (status !== 200) return handleNotifyError(MESSAGES.DELETE_FAILED)
    toast.success(MESSAGES.DELETE_SUCCESS, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
    mutate(remainProducts, {
      revalidate: false,
    })

    setShowDialog(false)
  }, [products, handleNotifyError, notifyId, mutate, selectedProductId])

  const renderProducts = useCallback(
    (data) => {
      if (!data?.length) return <h1 className={styles.empty}>There no products yet</h1>

      return data?.map(({ id, name, description }) => (
        <Product key={id} id={id} title={name} description={description} onDeleteProduct={handleDeleteProduct} />
      ))
    },
    [handleDeleteProduct]
  )

  const handleChangeSearchValue = useCallback((e) => setSearchValue(e.target.value), [])

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
            <Button variant="secondary" title="Add new product" size="lg" customStyle={styles.spacing} />
          </Link>
        </div>
        <div>{!searchValue.trim() ? renderProducts(products) : renderProducts(find)}</div>
      </div>
      {showDialog && <Popup isShow={showDialog} onCancel={handleCancel} onConfirm={handleConfirm} />}
      {(isLoading || isFinding) && <LoadingSpinner />}
    </div>
  )
}

export default Home
