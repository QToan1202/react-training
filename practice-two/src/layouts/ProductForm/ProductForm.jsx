import { memo, useCallback, useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useSWRMutation from 'swr/mutation'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Form, FormItem, Input } from '@components'
import { productService } from '@services'
import { toastConfig } from '@utils'
import { MESSAGES } from '@constants'
import styles from './ProductForm.module.css'

const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS

const Modal = styled.div`
  display: ${({ isShow }) => (isShow === true ? 'block' : 'none')};
`

const ProductForm = ({ defaultValues, action, onCancel, title, isShow }) => {
  const { trigger: triggerAddAPI } = useSWRMutation(API_PRODUCTS, productService.add)
  const { trigger: triggerEditAPI } = useSWRMutation(API_PRODUCTS, productService.edit)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues })

  const handleFormAction = useCallback(
    async (data) => {
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
    }
  }, [isSubmitSuccessful, reset, notifyId, action])

  return (
    <Modal isShow={isShow}>
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
                {action === 'add' && <Button type="submit" title="Add" size="lg" />}

                {action === 'edit' && (
                  <>
                    <Button type="reset" title="Cancel" onClick={onCancel} />
                    <Button type="submit" title="Confirm" variant="secondary" />
                  </>
                )}
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.oneOf(['edit', 'add']).isRequired,
  isShow: PropTypes.bool,
  defaultValues: PropTypes.object,
  onCancel: PropTypes.func,
}

ProductForm.defaultProps = {
  defaultValues: {},
  isShow: false,
  onCancel: () => undefined,
}

export default memo(ProductForm)
