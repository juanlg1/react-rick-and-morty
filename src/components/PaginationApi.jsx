import { Button } from '../ui/button'
import { Flex, P } from '../ui/core'

const PaginationApi = ({ page, setPage }) => {
  return (
    <Flex content='space-around'>
      <Flex>
      <P>-- Pagina {page} --</P>
      </Flex>
      <Flex>
        {
          page !== 1 ?
            <Button onClick={() => setPage(page - 1)}>PREVIUS</Button>
            :
            null
          }
          <span>|</span>
        <Button onClick={() => setPage(page + 1)}>PAGE {page + 1}</Button>
        <Button onClick={() => setPage(1)}>HOME</Button>
      </Flex>
    </Flex>
  )
}

export default PaginationApi
