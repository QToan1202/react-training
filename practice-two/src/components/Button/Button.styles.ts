import { IButtonProps, TButtonSize, TButtonVariant } from '@types';
import styled from 'styled-components'

const getBtnSpacing = (size: TButtonSize | undefined): string => {
  switch (size) {
    case 'sm':
      return '8px 34px'

    case 'md':
      return '8px 44px'

    case 'lg':
      return '8px 54px'

    default:
      return '4px 28px'
  }
}

const getBtnFontSize = (size: TButtonSize | undefined): string => {
  switch (size) {
    case 'md':
      return '18px'

    case 'lg':
      return '20px'

    default:
      return '16px'
  }
}

const getBtnTheme = (theme: TButtonVariant | undefined): string => {
  switch (theme) {
    case 'secondary':
      return 'var(--blue)'

    case 'tertiary':
      return 'var(--red)'

    default:
      return 'transparent'
  }
}

const RadiusButton = styled.button<Pick<IButtonProps, 'size' | 'variant'>>`
  margin-right: 10px;
  border: 1px solid var(--gray);
  border-radius: 40px;
  padding: ${({ size }) => getBtnSpacing(size)};
  cursor: pointer;
  background-color: ${({ variant }) => getBtnTheme(variant)};
  color: ${({ variant }) => variant !== 'primary' && 'white'};
  font-weight: 500;
  font-size: ${({ size }) => getBtnFontSize(size)};
`

export default RadiusButton
