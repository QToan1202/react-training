import { TButtonSize, TButtonVariant } from "@types"

export interface IButtonProps {
  title: string
  onClick(event: React.MouseEvent): void
  type?: HTMLButtonElement['type']
  size?: TButtonSize
  variant?: TButtonVariant
  customStyle?: string
}