import { memo, useCallback, useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useSWRMutation from 'swr/mutation'
import { Button, Form, FormItem, Input } from '@components'
import { productService } from '@services'
import { toastConfig } from '@utils'
import { MESSAGES } from '@constants'
import styles from './AddProduct.module.css'

const AddProduct = () => {
  const { trigger } = useSWRMutation(import.meta.env.VITE_API_PRODUCTS, productService.add)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  const handleAddProduct = useCallback(
    (data) => {
      trigger(data, {
        optimisticData: (current) => [...current, data],
        rollbackOnError: true,
      })
    },
    [trigger]
  )
  const notifyId = useId()
  useEffect(() => {
    const handleNotifySuccess = () => {
      toast.success(MESSAGES.CREATE_SUCCESS, toastConfig(notifyId, toast.POSITION.TOP_CENTER))
    }
    if (isSubmitSuccessful) {
      handleNotifySuccess()
      reset({ name: '', description: '', image: '', category: '' })
    }
  }, [isSubmitSuccessful, reset, notifyId])

  return (
    <Form onSubmit={handleSubmit(handleAddProduct)}>
      <FormItem>
        <Input
          label="name"
          register={register}
          config={{
            required: MESSAGES.REQUIRED,
          }}
        />
        {errors.name && (
          <p role="alert" className={styles.error_message}>
            {errors.name?.message}
          </p>
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
        {errors.description && (
          <p role="alert" className={styles.error_message}>
            {errors.description?.message}
          </p>
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
        {errors.image && (
          <p role="alert" className={styles.error_message}>
            {errors.image?.message}
          </p>
        )}
      </FormItem>
      <FormItem>
        <Input
          label="category"
          register={register}
          config={{
            required: MESSAGES.REQUIRED,
          }}
        />
        {errors.category && (
          <p role="alert" className={styles.error_message}>
            {errors.category?.message}
          </p>
        )}
      </FormItem>
      <FormItem>
        <Button type="submit" title="Add" size="lg" />
      </FormItem>
    </Form>
  )
}

export default memo(AddProduct)
