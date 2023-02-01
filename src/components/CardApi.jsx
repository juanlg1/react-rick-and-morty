import { Card, Flex, Img, Line } from '../ui/core'

const CardApi = ({ character }) => {
  return (
    // <Flex>
    <Card key={character.id}>
      <h1>{character.name}</h1>
      <Img
        width={250}
        height={250}
        src={character.image}
      />
      <Flex
        gap='0.3rem'
        direction='column'
        items='flex-start'
        content='flex-start'
      >
        <p>Origin: {character.origin.name}</p>
        <Line />
        <p>Specie: {character.species}</p>
        <Line />
        <p>Gender: {character.gender}</p>
        <Line />
        <p>Status: {character.status}</p>
      </Flex>
    </Card>
    // </Flex>
  )
}

export default CardApi
