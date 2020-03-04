import styled from 'styled-components'
import {theme} from '../styles'

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
`

const OuterImageWrapper = styled.div`
  width: 50%;
  min-height: ${props => (props.h) ? `${props.h}px` : 'inital'};
  height: 100%;
  line-height: 0;
  :hover > div {
    width: 100%;
    height: 100%;
  }
  

  @media ${theme.device.md} {
    width: 33.33%;
  }

  @media ${theme.device.lg} {
    width: 25%;
  }
`

const InnerImageWrapper = styled.div`
  width: 50%;
  line-height: 0;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  line-height: 0;
`

export {
  ImagesWrapper,
  OuterImageWrapper,
  InnerImageWrapper,
  Image
}
