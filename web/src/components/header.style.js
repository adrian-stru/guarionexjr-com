import styled from 'styled-components'
import {theme} from '../styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${theme.padding.base};
  grid-column-gap: ${theme.padding.base};
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
  margin-top: ${props => (props.isInstagram) ? '20px' : '-2px'};
`

const GridColumn = styled.div`
  position: relative;
`

const NavItem = styled.a`
  display: block;
`

const Fixed = styled.div`
  position: fixed;
  z-index: 100;
`

const NotFixed = styled.div`
  margin-top: ${props => (props.mtSm) ? (props.mtSm) : null};
  @media ${theme.device.sm} {
    margin-top: ${props => (props.mt) ? (props.mt) : null};
  }
  hyphens: auto;

  @media ${theme.device.md} {
    hyphens: none;
  }
`

const ContactWrap = styled.div`
  p {
    margin-block-start: 0;
  }
`

export {
  NavItem,
  Fixed,
  Grid,
  GridColumn,
  NotFixed,
  ContactWrap
}
