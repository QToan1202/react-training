import { memo } from 'react'
import ProductImage from './Image.styles'
import { IImageProps } from '@types'

const Image = ({ width, height, src, alt }: IImageProps) => <ProductImage width={width} height={height} src={src} alt={alt} />

export default memo(Image)
