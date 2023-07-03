import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ caracter }) => {
  return (
    <Link
    to={`/character/${caracter.id}`}
    className='inline-block rounded-xl bg-slate-700 overflow-hidden border border-white'>
      <div className='relative'>
        <img
          src={caracter.image}
          alt={`image of ${caracter.name}`}
          className='w-full h-64 object-cover object-top'
        />
        <img src={caracter.image}
          className='w-20 h-20 rounded-full absolute top-52 right-0 object-cover object-top'
        />
        <section className='mt-10 mb-8 text-center text-white' >
          <p className='font-bold text-2xl'>{caracter.name}</p>
          <p>{caracter.location.name}</p>
          <article className='flex justify-center items-center gap-5 mt-4'>
            <p className='bg-green-400 rounded-md px-2 py-1'>{caracter.status}</p>
            <p className='bg-green-400 rounded-md px-2 py-1'>{caracter.species}</p>
          </article>
        </section>
      </div>
    </Link>
  )
}

export default CharacterCard