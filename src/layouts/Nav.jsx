import NavigationLink from '../components/refills/NavigationLink'
import { Header, NavItems, NavUl } from '../ui/header'

const Nav = () => {
  return (
    <Header>
      <NavigationLink text='Consumo de API`S - REACTJS' to='/' />
      <NavUl>
        <NavItems>
          <NavigationLink text='Rick and Morty' to='/rick-and-morty-api' />
        </NavItems>
        <NavItems>
          <NavigationLink text='json plholder' to='/place-holder-api' />
        </NavItems>
      </NavUl>
    </Header>
  )
}

export default Nav
