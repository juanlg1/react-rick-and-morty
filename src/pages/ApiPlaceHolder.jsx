import axios from 'axios'
import ApiHolder from '../components/ApiHolder'
import { useEffect, useState } from 'react'
import { Flex, Grid, P } from '../ui/core'

const ApiPlaceHolder = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_HOLDER_API_URL}/posts`
    )
    setInfo(response.data)
  }

  return (
    <>
      <Flex>
        <P size='1.5rem'>API DE JSON PLACE HOLDER FROM REACTJS</P>
      </Flex>
      <Grid>
        {info.map((data) => {
          return <ApiHolder key={data.id} data={data} />
        })}
      </Grid>
    </>
  )
}

export default ApiPlaceHolder
