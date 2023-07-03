import { Route, Routes } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Principal from '../pages/Principal'
import CharacterDetail from '../components/CharacterDetail'

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/character' element={<Principal />} />
        <Route path='/character/:id' element={<CharacterDetail />} />
      </Routes>
    </>
  )
}

export default Router
