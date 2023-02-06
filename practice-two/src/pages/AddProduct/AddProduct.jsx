import { memo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, FormItem, Input } from '../../components'
import MESSAGES from '../../constants/messages'
import productService from '../../services/product'
import styles from './AddProduct.module.css'

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  const handleAddProduct = (data) => productService.add(data)
  useEffect(() => {
    if (isSubmitSuccessful) reset({ name: '', description: '', image: '', category: '' })
  }, [isSubmitSuccessful, reset])

  return (
    <Form onSubmit={handleSubmit(handleAddProduct)}>
      <FormItem>
        <Input
          label="name"
          register={register}
          error={{
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
          error={{
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
          error={{
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
          error={{
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
        <Button type="submit" />
      </FormItem>
    </Form>
  )
}

export default memo(AddProduct)
