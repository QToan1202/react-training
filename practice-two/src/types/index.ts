export * from './interfaces'

export type TButtonSize = 'sm' | 'md' | 'lg'


export type TButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type TProductFormAction = 'edit' | 'add'

export type TProduct = {
  id: number
  name: string
  description: string
  category: string
  image: string
}
