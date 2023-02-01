import axios from 'axios'
import CardApi from '../components/CardApi'
import PaginationApi from '../components/PaginationApi'
import { useEffect, useState } from 'react'
import { Flex, Grid, P } from '../ui/core'

const ConsultApi = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacter()
  }, [page])

  const getCharacter = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/character?page=${page}`
    )
    setCharacters(response.data.results)
  }

  return (
    <>
      <Flex>
        <P size='1.5rem'>API RICK AND MORTY FROM REACTJS </P>
      </Flex>
      <PaginationApi page={page} setPage={setPage} />
      <Grid>
        {characters.map((character) => {
          return <CardApi key={character.id} character={character} />
        })}
      </Grid>
      <PaginationApi page={page} setPage={setPage} />
    </>
  )
}

export default ConsultApi
