import styled from 'styled-components'

const ProductImage = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  @media only screen and (min-width: 480px) {
    width: 182px;
    height: 240px;
  }

  @media only screen and (min-width: 768px) {
    width: 202px;
    height: 240px;
  }

  @media only screen and (min-width: 1024px) {
    width: 252px;
    height: 240px;
  }
`

export default ProductImage
