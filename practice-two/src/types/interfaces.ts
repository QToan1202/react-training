import { TButtonSize, TButtonVariant } from "@types"

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
  label?: string
}
