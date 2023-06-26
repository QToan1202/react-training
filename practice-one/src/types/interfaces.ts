import { HTMLInputTypeAttribute } from "react"
import { TAutocomplete, TButtonSize, TButtonVariant, TFormMethod, TProduct, TTextColor, TTextWeight } from "."
import columns from "../data/columns"

export interface IButtonProps {
  title: string
  size?: TButtonSize
  variant?: TButtonVariant
  onClick(event: React.MouseEvent): void
}

export interface IImageProps {
  width?: number
  height?: number
  src: string
  alt?: string
}

export interface IColumnProps {
  contents: typeof columns
  socialIcon?: string
}

export interface IFooterProps {
  logo: string
  notice: string
  socialIcon: string
  columns: typeof columns
}

export interface IFormProps {
  action: string
  method: TFormMethod
  children?: JSX.Element | JSX.Element[]
}

export interface IHeadingTextProps {
  content: string
  type?: string
}

export interface IInputProps {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: TAutocomplete
}

export interface ILinkProps {
  to: string
  children: JSX.Element | JSX.Element[] | string
  style?: string
}

export interface INavigationProps {
  logo: HTMLImageElement['src']
  links: string[]
  icons: HTMLImageElement['src'][]
}

export interface IProductProps {
  product: TProduct
}

export interface ITextProps {
  children: string
  weight?: TTextWeight
  color?: TTextColor
  price?: boolean
  priceSection?: boolean
}
