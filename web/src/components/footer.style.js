import styled from 'styled-components'
import {theme} from '../styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${theme.padding.base};
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
  padding-top: ${props => (props.mt) ? `${props.mt}px` : null};
  @media ${theme.device.md} {
    padding-top: ${props => (props.mediumMt) ? `${props.mediumMt}px` : null};
  }
`

const GridItem = styled.div``

const CvWrapper = styled.div`
  hyphens: auto;
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
`

const BackToTopWrapper = styled.a`
  cursor: pointer;
  display: block;
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
`

export {Grid, GridItem, CvWrapper, BackToTopWrapper}
