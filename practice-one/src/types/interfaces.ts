import { TButtonSize, TButtonVariant } from "."
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
  columns: JSX.Element | JSX.Element[]
}