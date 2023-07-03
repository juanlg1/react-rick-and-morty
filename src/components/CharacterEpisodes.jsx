import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {GiCommercialAirplane} from 'react-icons/gi'
import {MdOutlineSubtitles} from 'react-icons/md'

const CharacterEpisodes = ({ episodesList }) => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getAllEpisodes()
  }, [episodesList])

  const getAllEpisodes = async () => {
    try {
      const response = await axios.all(episodesList.map(episode => axios.get(episode)))
      const data = response.map(response => response.data)
      setEpisodes(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center gap-4 max-h-[70vh] overflow-y-scroll pt-16'>
      {episodes.map(episode => (
        <article
          key={episode.id}
          className='w-full bg-slate-700 bg-opacity-50 rounded-lg p-2 space-y-2'
        >
          <p>{episode.name}</p>
          <div className="flex flex-wrap justify-start items-center gap-4">
            <p className="flex justify-start items-center gap-2 text-white bg-teal-600 py-1 px-2 rounded-md">
              <GiCommercialAirplane size={18} />
              <span>
                {episode.air_date}
              </span>
            </p>
            <p className="flex justify-start items-center gap-2 text-white bg-red-400 py-1 px-2 rounded-md">
              <MdOutlineSubtitles size={18} />
              <span className="">
                {episode.episode}
              </span>
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default CharacterEpisodes