import styled from 'styled-components'
import {theme} from '../styles'
const {device} = theme

const Wrapper = styled.div`
  width: 100%;
  > div :last-child {
    margin-bottom: ${theme.padding.base};
  }
  @media ${theme.device.md} {
    > div :last-child {
      margin-bottom: ${theme.margin.base};
    }
  }
`

const Row = styled.div`
  margin-bottom: ${props => (props.mbBase) ? `${props.mbBase}px` : null};
  @media ${theme.device.md} {
    margin-bottom: ${props => (props.mediumMbBase) ? `${props.mediumMbBase}px` : null};
  }
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
  row-gap: ${theme.padding.base};
  grid-row-gap: ${theme.padding.base};
  column-gap: ${theme.padding.base};
  grid-column-gap: ${theme.padding.base};

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
