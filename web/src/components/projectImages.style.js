import styled from 'styled-components'
import {theme} from '../styles'
const {device} = theme

const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
`

const Row = styled.div`
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
`

const ImageWrap = styled.div`
  width: 100%;
  height: auto;
  
  @media ${device.md} {
    height: ${props => (props.h) ? `${props.h}px` : 'auto'};
    width: ${props => (props.w) ? `${props.w}px` : '100%'};
    margin: 0 auto;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${theme.padding.base};
  row-gap: ${theme.padding.base};

  @media ${theme.device.md} {
    grid-template-columns: 1fr 1fr;
  }
`

export {
  Wrapper,
  ImageWrap,
  Row,
  Grid
}
