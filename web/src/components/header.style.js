import styled from 'styled-components'
import {theme} from '../styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${theme.padding.base};
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
`

const GridColumn = styled.div``

const NavItem = styled.a`
  display: block;
`

const Fixed = styled.div`
  position: fixed;
  z-index: 100;
`

const NotFixed = styled.div`
  margin-top: ${props => (props.marginTop) ? (props.marginTop) : null};
  hyphens: auto;

  @media ${theme.device.md} {
    hyphens: none;
  }
`

export {
  NavItem,
  Fixed,
  Grid,
  GridColumn,
  NotFixed
}
