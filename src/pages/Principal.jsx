import { Flex, Imgsvg, P, Section } from '../ui/core'
import { GrReactjs } from 'react-icons/Gr'
import { SiStyledcomponents, SiReactrouter } from 'react-icons/Si'

const Principal = () => {
  return (
    <Section>
      <Flex padding='0'>
        <Flex direction='column' gap='2rem'>
          <h2 style={{ textAlign: 'center' }}>Consumo de API`s de JSON Place Holder y Rick and Morty API</h2>
          <P>
            Esta es mi primera APP y la realizé con el fin de aprender a
            consumir APIS de terceros con el framework de ReactJS y utilizo 3
            librerias:
          </P>
          <Flex padding='0' content='space-between'>
            <SiReactrouter size={30} />
            <span>React router DOM</span>
            <SiStyledcomponents size={45} />
            <span>Styled Components</span>
            <GrReactjs size={30} />
            <span>Axios</span>
          </Flex>
        </Flex>
        <Flex padding='0'>
          <Imgsvg
          width={300}
          src='/react.svg'/>
        </Flex>
      </Flex>
    </Section>
  )
}

export default Principal
