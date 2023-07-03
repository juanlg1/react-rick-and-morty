import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const NavigationLink = ({ to, text }) => {
  const location = useLocation()
  const path = location.pathname === to ? 'active' : ''
  return (
    <Link
      to={to}
      active={path}
      className='bg-red-400 rounded-md p-2'
    >
      {text}
    </Link>
  )
}

export default NavigationLink
