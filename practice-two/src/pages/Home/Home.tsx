import React, { useCallback, useId, useState } from 'react'
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { Button, Input, LoadingSpinner, Option, Popup, Product, SearchBar, Select, Tag } from '@components'
import { ProductForm } from '@layouts'
import { productService } from '@services'
import { useDebounce } from '@hooks'
import { toastConfig } from '@utils'
import { MESSAGES } from '@constants'
import { TProduct } from '@types'
import styles from './Home.module.css'

const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS
const API_SORT_PRODUCTS = import.meta.env.VITE_SORT_PRODUCT

const Home = () => {
  const [sortType, setSortType] = useState('none')
  const getProductsEndPoint = useCallback(() => {
    switch (sortType) {
      case 'none':
        return API_PRODUCTS

      default:
        return API_SORT_PRODUCTS + sortType
    }
  }, [sortType])
  const { data: products, error, isLoading, mutate } = useSWR<TProduct[], Error>(getProductsEndPoint, productService.get)
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 1000)
  const { data: find, isLoading: isFinding } = useSWR<TProduct[], Error>(
    debouncedValue.length ? [API_PRODUCTS, debouncedValue] : null,
    ([path, query]: string[]) => productService.find(path, query)
  )

  const notifyId = useId()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<number>()
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data, isLoading: isFetch } = useSWR<TProduct[], Error>(
    shouldFetch ? API_PRODUCTS + `/${selectedProductId}` : null,
    productService.get,
    { revalidateOnFocus: false }
  )

  const handleNotifyError = useCallback(
    (error: Error | string) => {
      let messages = ''
      if (error instanceof Error) {
        messages = error.message
      } else {
        messages = error
      }

      toast.error(messages, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
    },
    [notifyId]
  )

  const handleDeleteProduct = useCallback((id: number) => {
    setShowDeleteDialog(true)
    setSelectedProductId(id)
  }, [])

  const handleEditProduct = useCallback(
    (id: number) => {
      setSelectedProductId(id)
      setShouldFetch(true)
      if (!isFetch) setShowEditDialog(true)
    },
    [isFetch]
  )

  const handleCloseEditForm = useCallback(() => setShowEditDialog(false), [])

  const handleOpenAddForm = useCallback(() => setShowAddDialog(true), [])

  const handleCloseAddForm = useCallback(() => setShowAddDialog(false), [])

  const handleCancel = useCallback(() => setShowDeleteDialog(false), [])

  const handleConfirm = useCallback(async () => {
    if (!selectedProductId) return
    if (!products) return

    const remainProducts = (products).filter((item) => item.id !== selectedProductId)
    const status = await productService.remove(selectedProductId)

    if (status !== 200) return handleNotifyError(MESSAGES.DELETE_FAILED)
    toast.success(MESSAGES.DELETE_SUCCESS, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
    mutate(remainProducts, {
      revalidate: false,
    })

    setShowDeleteDialog(false)
  }, [products, handleNotifyError, notifyId, mutate, selectedProductId])

  const renderProducts = useCallback(
    (data: TProduct[] | null | undefined): JSX.Element | JSX.Element[] => {
      if (!data?.length) return <h1 className={styles.empty}>There no products yet</h1>

      return data?.map(({ id, name, description, image }) => (
        <Product
          key={id}
          id={id}
          cover={image}
          title={name}
          description={description}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
      ))
    },
    [handleDeleteProduct, handleEditProduct]
  )

  const handleChangeSearchValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value), [])

  const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setSortType(e.target.value), [])

  return (
    <div className={styles.container}>
      <SearchBar value={searchValue} onChange={handleChangeSearchValue} />
      <div className={styles.col}>
        <div className={styles.filter}>
          <Input placeholder="Enter filter category" />
          <div className={styles.filter__tag}>
            <Tag title="Book" />
            <Tag title="Tablet" />
          </div>
          <Select onSelect={handleSortChange} value={sortType}>
            <Option value="none" label="None" />
            <Option value="asc" label="A-Z" />
            <Option value="desc" label="Z-A" />
          </Select>
        </div>
        <div>
          <Button size="md" variant="primary" title="Create new product" onClick={handleOpenAddForm} />
          {!searchValue.trim() ? renderProducts(products) : renderProducts(find)}
        </div>
      </div>
      {showDeleteDialog && (
        <Popup
          title="Are you sure wanna delete this product?"
          isShow={showDeleteDialog}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
      {showAddDialog && (
        <ProductForm
          title="Add Product"
          action="add"
          isShow={showAddDialog}
          onCancel={handleCloseAddForm}
          onSubmitSuccess={handleCloseAddForm}
        />
      )}
      {showEditDialog && !isFetch && (
        <ProductForm
          title="Edit Product"
          action="edit"
          defaultValues={data && data[0]}
          isShow={showEditDialog}
          onCancel={handleCloseEditForm}
          onSubmitSuccess={handleCloseEditForm}
        />
      )}
      {(isLoading || isFinding) && <LoadingSpinner />}
    </div>
  )
}

export default Home
