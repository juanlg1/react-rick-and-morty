import { Card } from '../ui/core'

const ApiHolder = ({ data }) => {
  return (
    <Card width='300px'>
      <h4>{data.id}</h4>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </Card>
  )
}

export default ApiHolder
