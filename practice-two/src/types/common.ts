import { TButtonSize, TButtonVariant } from '@types'
import React from 'react'

export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string
  size?: TButtonSize
  variant?: TButtonVariant
  customStyle?: string
}

export interface IContentProps {
  title: string
  description?: string
}

export interface IFormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  action?: HTMLFormElement['action']
  method?: HTMLFormElement['method']
  onSubmit(event: React.FormEvent<HTMLFormElement>): void
  children: JSX.Element | JSX.Element[]
}

export interface IImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: HTMLImageElement['src']
  alt: HTMLImageElement['alt']
}

export interface IInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}

export interface IOptionProps
  extends React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
  value: string
  label: string
}

export interface IPopupProps {
  title: string
  isShow?: boolean
  onCancel(): void
  onConfirm(): void
}

export interface ISearchBarProps extends IInputProps {
  value: string | number
  placeholder?: string
  name?: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

export interface ISelectProps
  extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  defaultValue?: string
  children: JSX.Element | JSX.Element[]
  onSelect(event: React.ChangeEvent<HTMLSelectElement>): void
  value: string
}

export interface ITagProps {
  title: string
  onClick?(event: React.MouseEvent): void
}

export interface IHeaderProps {
  logo: HTMLImageElement['src']
}
