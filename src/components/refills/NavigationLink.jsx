import { useLocation } from 'react-router'
import { NavLink } from '../../ui/header'

const NavigationLink = ({ to, text }) => {
  const location = useLocation()
  const path = location.pathname === to ? 'active' : ''
  return (
    <NavLink to={to} active={path}>
      {text.toUpperCase()}
    </NavLink>
  )
}

export default NavigationLink
