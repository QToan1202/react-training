export type TProductFormAction = 'edit' | 'add'

export type TProduct = {
  id: number
  name: string
  description: string
  category: string
  image: string
}

export interface IProductProps extends Partial<TProduct> {
  id: number
  title: string
  cover?: string
  onDeleteProduct(id: number): void
  onEditProduct(id: number): void
}

export interface IProductFormProps {
  defaultValues?: Partial<TProduct> | TProduct
  action: TProductFormAction
  onCancel(): void
  title: string
  isShow?: boolean
  onSubmitSuccess(): void
}