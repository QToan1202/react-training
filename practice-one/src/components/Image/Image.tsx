import { IImageProps } from '@types'

const Image = ({ width, height, src, alt }: IImageProps) => <img width={width} height={height} src={src} alt={alt} />

export default Image
