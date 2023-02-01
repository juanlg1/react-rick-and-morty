import styled from 'styled-components'
import { color, rounded } from './utils'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Card = styled.article`
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: ${rounded.sm};
  padding: 1rem;
  border: 1px solid ${color.grayDark};
  height: ${props => props.width ? props.width : '500px'};
  box-shadow: 1px 3px 6px black ;
  :hover {
    cursor:pointer;
    transform: scale(1.03) translateY(-5px);
    transition: all 300ms ease-out;
    background: rgba(161 185 226 / .6);
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 5rem 0;
  width: 80%;
  margin: 0 auto;
  gap:3rem;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.content ? props.content : 'center'};
  align-items: ${props => props.items ? props.items : 'center'};
  gap : ${props => props.gap ? props.gap : '1rem'};
  width: ${props => props.width ? props.width : '100%'};
  padding: ${props => props.padding ? props.padding : '1rem'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'no-wrap'};
  `

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  :hover {
    transform: scale(1.05);
    transition: all 200ms ease-in;
    cursor: pointer;
  }
`

export const Imgsvg = styled.img`
  object-fit: contain;
  animation: rotate 17s linear infinite;
  @keyframes rotate {
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg)
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 2rem;
  padding: 1rem 1.4rem;
  justify-content: center;
  align-items: center;
`

export const Line = styled.hr`
border:none;
  width: 100%;
  height: 1px;
  /* color: red; */
  background: ${color.grayDark};
`

export const P = styled.p`
  font-size: ${props => props.size ? props.size : '1.2rem'};
  font-weight: bold;
  letter-spacing: 2px;
`
export const Watch = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 200px;
  height: 200px;
  border: 2px solid #375da9;
  border-radius: 50%;
  font-family: monospace;
  color: #375da9;
  font-size: 1.7rem;
  
`
