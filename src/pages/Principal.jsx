import Layout from '../layouts/Layout'
import axios from '../api/axios'
import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'

const Principal = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters()
  }, [page])

  const getCharacters = async () => {
    const response = await axios.get(`character?page=${page}`)
    setCharacters(response.data.results)
  }
  console.log(characters)
  return (
    <Layout>
      <div className='text-center text-2xl'>
        Personajes de la serie rick y morty
      </div>
      <div className='flex justify-center items-center p-2 gap-8 my-10'>
        <p>-- pagina {page} --</p>
        {page !== 1 ?
          <button className='bg-blue-400 rounded-md px-3 py-1' onClick={() => setPage(page - 1)}>Atras</button>
          : null
        }
        <button className='bg-blue-400 rounded-md px-3 py-1' onClick={() => setPage(page + 1)}>Siguiente</button>
        {page !== 1 ?
          <button className='bg-blue-400 rounded-md px-3 py-1' onClick={() => setPage(1)}>Principio</button>
          : null
        }
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {characters.map((caracter) => (
          <CharacterCard
            key={caracter.id}
            caracter={caracter}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Principal
