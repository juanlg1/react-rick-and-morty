import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from '../api/axios'
import Layout from '../layouts/Layout'
import CharacterEpisodes from './CharacterEpisodes'

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getCharacterById()
  }, [])
  const getCharacterById = async () => {
    await axios.get(`character/${id}`)
      .then(response => response.data)
      .then(data => setCharacter(data))
      .catch(error => console.log(error))
  }
  console.log(character)
  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <article className='bg-red-400 h-auto p-2 flex items-center gap-8 rounded-xl'>
          <img
            src={character.image}
            alt={character.name}
            className='h-36 w-36 rounded-full'
          />
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>{character.name}</h2>
            <div className='flex flex-wrap gap-4'>
              <p className='bg-green-300 py-1 px-2 rounded-lg'>{character.status}</p>
              <p className='bg-orange-300 py-1 px-2 rounded-lg'>{character.species}</p>
              <p className='bg-teal-400 py-1 px-2 rounded-lg'>{character.gender}</p>
              <p className='bg-indigo-400 py-1 px-2 rounded-lg'>{character.origin?.name}</p>
              <p className='bg-cyan-500 py-1 px-2 rounded-lg'>{character.location?.name}</p>
              <p className='bg-sky-600 py-1 px-2 rounded-lg'>{character.created}</p>
            </div>
          </div>
        </article>
        <div>
          <CharacterEpisodes
            episodesList={character.episode}
          />
        </div>
      </div>
    </Layout>
  )
}

export default CharacterDetail