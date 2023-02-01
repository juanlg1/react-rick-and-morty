import styled from 'styled-components'
import { color, rounded } from './utils'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  display: flex;
  align-items: center;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    ${color.dark},
    ${color.darkSecondary}
  );
  background: linear-gradient(to right, ${color.dark}, ${color.darkSecondary});
  padding: 1rem 3rem;
  justify-content: space-between;
`

export const Links = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${color.white};
`

export const NavUl = styled.ul`
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  font-size: 1.3rem;
  align-items: center;
`

export const NavItems = styled.li`
  list-style: none;
  display: flex;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.4rem;
  color: ${color.white};
  font-size: 1.3rem;
  :hover {
    background: ${color.grayHover};
    border-radius: ${rounded.sm};
    transition: all 700ms ease;
  }
`

export const Button = styled.button`
  background: ${color.lightPurple};
  padding: 1rem;
  border: none;
  border-radius: ${rounded.sm};
  font-size: 1rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
    opacity: 0.8;
    color: ${color.white};
    transition: all 200ms ease-in;
  }
`
