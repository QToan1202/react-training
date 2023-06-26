import { Fragment, memo, useCallback, useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useSWRMutation from 'swr/mutation'
import { Button, Form, FormItem, Input } from '@components'
import { productService } from '@services'
import { toastConfig } from '@utils'
import { MESSAGES } from '@constants'
import styles from './ProductForm.module.css'
import { IProductFormProps, TProduct } from '@types'

const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS

const ProductForm = ({ defaultValues, action, onCancel, title, isShow, onSubmitSuccess }: IProductFormProps) => {
  const { trigger: triggerAddAPI } = useSWRMutation(API_PRODUCTS, productService.add)
  const { trigger: triggerEditAPI } = useSWRMutation(API_PRODUCTS, productService.edit)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues })

  const handleFormAction = useCallback(
    async (data: Partial<TProduct>) => {
      const sendData = { ...defaultValues, ...data }

      switch (action) {
        case 'add':
          await triggerAddAPI(sendData)
          break

        case 'edit':
          await triggerEditAPI(sendData)
          break

        default:
          break
      }
    },
    [triggerAddAPI, triggerEditAPI, action, defaultValues]
  )
  const notifyId = useId()

  useEffect(() => {
    const handleNotifySuccess = () => {
      toast.success(
        action === 'add' ? MESSAGES.CREATE_SUCCESS : MESSAGES.UPDATE_SUCCESS,
        toastConfig(notifyId, toast.POSITION.TOP_CENTER)
      )
    }
    if (isSubmitSuccessful) {
      handleNotifySuccess()
      reset({ name: '', description: '', image: '', category: '' })
      onSubmitSuccess()
    }
  }, [isSubmitSuccessful, reset, notifyId, action, onSubmitSuccess])

  return (
    <div className={isShow ? styles.block : styles.none}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <div className={styles.container}>
            <Form onSubmit={handleSubmit(handleFormAction)}>
              <FormItem>
                <Input
                  label="name"
                  register={register}
                  config={{
                    required: MESSAGES.REQUIRED,
                  }}
                />
                {errors.name ? (
                  <p role="alert" className={styles.error_message}>
                    {errors.name.message}
                  </p>
                ) : (
                  <Fragment />
                )}
              </FormItem>
              <FormItem>
                <Input
                  label="description"
                  register={register}
                  config={{
                    maxLength: {
                      value: 200,
                      message: MESSAGES.MAX_LENGTH,
                    },
                  }}
                />
                {errors.description ? (
                  <p role="alert" className={styles.error_message}>
                    {errors.description.message}
                  </p>
                ) : (
                  <Fragment />
                )}
              </FormItem>
              <FormItem>
                <Input
                  label="image"
                  register={register}
                  config={{
                    required: MESSAGES.REQUIRED,
                  }}
                />
                {errors.image ? (
                  <p role="alert" className={styles.error_message}>
                    {errors.image.message}
                  </p>
                ) : <Fragment />}
              </FormItem>
              <FormItem>
                <Input
                  label="category"
                  register={register}
                  config={{
                    required: MESSAGES.REQUIRED,
                  }}
                />
                {errors.category ? (
                  <p role="alert" className={styles.error_message}>
                    {errors.category.message}
                  </p>
                ) : <Fragment />}
              </FormItem>
              <FormItem>
                <Button type="reset" title="Cancel" onClick={onCancel} size="lg" />
                {action === 'add' ? <Button type="submit" title="Add" size="lg" /> : <Fragment/>}
                {action === 'edit' ? <Button type="submit" title="Confirm" variant="secondary" size="lg" /> : <Fragment />}
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductForm.defaultProps = {
  isShow: false,
}

export default memo(ProductForm)
