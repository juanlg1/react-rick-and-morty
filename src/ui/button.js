import styled from 'styled-components'
import { color } from './utils'

export const Button = styled.button`
  border: none;
  padding: 0.4rem 1rem;
  background: ${color.purpleHover};
  color: ${color.white};
  border-radius: 10px;
  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`
