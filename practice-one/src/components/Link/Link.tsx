import './link.css'
import { ILinkProps } from '../../types/interfaces'

const Link = ({ to, children, style }: ILinkProps) => (
  <a className={style ? `link link--${style}` : 'link'} href={to}>
    {children}
  </a>
)

export default Link
