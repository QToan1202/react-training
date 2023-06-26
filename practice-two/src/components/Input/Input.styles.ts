import { IInputProps } from '@types'
import styled from 'styled-components'

export const Wrapper = styled.div<{ hasLabel: boolean }>`
  display: ${({ hasLabel }) => (hasLabel ? 'grid' : 'block')};
  grid-template-columns: 100px 1fr;
  column-gap: 5px;
`

export const CLabel = styled.label`
  margin: auto 0;
  font-weight: 500;
  text-align: right;
  text-transform: capitalize;

  &::after {
    content: ':';
  }
`

export const CInput = styled.input`
  box-sizing: border-box;
  color: var(--black);
  font-size: 18px;
  padding: 10px;
`
