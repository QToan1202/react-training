import { IHeadingTextProps } from '../../types/interfaces'
import './headingText.css'

const HeadingText = ({ content, type }: IHeadingTextProps) => (
  <h2 className={type ? `heading heading--${type}` : 'heading'}>{content}</h2>
)

export default HeadingText
