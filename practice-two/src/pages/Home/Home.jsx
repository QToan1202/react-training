import { useCallback, useId, useState } from 'react'
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { Input, LoadingSpinner, Option, Popup, Product, SearchBar, Select, Tag } from '@components'
import { AddProduct, EditProduct } from '@layouts'
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
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState(undefined)
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data, isLoading: isFetch } = useSWR(
    shouldFetch ? API_PRODUCTS + `/${selectedProductId}` : null,
    productService.get
  )

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

  const handleEditProduct = useCallback(
    (id) => {
      setSelectedProductId(id)
      setShouldFetch(true)
      if (!isFetch) {
        setShouldFetch(false)
        setShowEditDialog(true)
      }
    },
    [isFetch]
  )

  const handleCloseEditForm = useCallback(() => setShowEditDialog(false), [])

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
        <Product
          key={id}
          id={id}
          title={name}
          description={description}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
      ))
    },
    [handleDeleteProduct, handleEditProduct]
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
        </div>
        <div>
          <AddProduct />
          {!searchValue.trim() ? renderProducts(products) : renderProducts(find)}
        </div>
      </div>
      {showDialog && (
        <Popup
          title="Are you sure wanna delete this product?"
          isShow={showDialog}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
      {showEditDialog && !isFetch && (
        <EditProduct productData={data} isShow={showEditDialog} onCancel={handleCloseEditForm} />
      )}
      {(isLoading || isFinding) && <LoadingSpinner />}
    </div>
  )
}

export default Home
