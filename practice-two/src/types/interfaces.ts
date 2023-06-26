import { TButtonSize, TButtonVariant, TProduct, TProductFormAction } from "@types"
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form"

export interface IButtonProps {
  title: string
  onClick(event: React.MouseEvent): void
  type?: HTMLButtonElement['type']
  size?: TButtonSize
  variant?: TButtonVariant
  customStyle?: string
}

export interface IContentProps {
  title: string
  description?: string
}

export interface IFormProps {
  action?: HTMLFormElement['action']
  method?: HTMLFormElement['method']
  onSubmit(event: React.FormEvent): void
  children: JSX.Element | JSX.Element[]
}

export interface IImageProps {
  src: HTMLImageElement['src'],
  alt: HTMLImageElement['alt'],
  width?: number
  height?: number
}

export interface IInputProps extends Partial<HTMLInputElement> {
  label: keyof TProduct
  config: RegisterOptions
  register: UseFormRegister<Partial<TProduct>>
}

export interface IOptionProps extends Partial<HTMLOptionElement> {
  value: string
  label: string
}

export interface IPopupProps {
  title: string
  isShow?: boolean
  onCancel(): void
  onConfirm(): void
}

export interface IProductProps {
  id: number
  title: string
  cover: string
  description?: string
  onDeleteProduct(id: number): void
  onEditProduct(id: number): void
}

export interface ISearchBarProps {
  value: string | number
  placeholder?: string
  name?: string
  onChange(event: React.FormEvent): void
}

export interface ISelectProps {
  defaultValue?: string
  children: JSX.Element | JSX.Element[]
  onSelect(event: React.ChangeEvent): void
  value: string
}

export interface ITagProps {
  title: string
  onClick(event: React.MouseEvent): void
}

export interface IHeaderProps {
  logo: HTMLImageElement['src']
}

export interface IProductFormProps {
  defaultValues?: Partial<TProduct>
  action: TProductFormAction
  onCancel(): void
  title: string
  isShow?: boolean
  onSubmitSuccess(): void
}
