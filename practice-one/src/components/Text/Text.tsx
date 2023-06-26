import './text.css'
import { ITextProps } from '../../types/interfaces'

const Text = ({ children, weight, color, price, priceSection }: ITextProps) => {
  const styleClass = ['text']

  color && styleClass.push(`text-${color}`)
  weight && styleClass.push(`text-${weight}`)
  price && styleClass.push('text--price')
  priceSection && styleClass.push('text--price-section')

  return <p className={styleClass.join(' ')}>{children}</p>
}

export default Text
