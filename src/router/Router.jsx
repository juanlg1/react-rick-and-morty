import { Route, Routes } from 'react-router-dom'
import { Container } from '../ui/core'
import Nav from '../layouts/Nav'
import Principal from '../pages/Principal'
import ConsultApi from '../pages/ConsultApi'
import ApiPlaceHolder from '../pages/ApiPlaceHolder'

const Router = () => {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/rick-and-morty-api' element={<ConsultApi />} />
        <Route path='/place-holder-api' element={<ApiPlaceHolder />} />
      </Routes>
    </Container>
  )
}

export default Router
