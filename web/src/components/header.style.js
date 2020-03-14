import styled from 'styled-components'
import {theme, config} from '../styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  margin-bottom: ${config.sectionMargin.initial}

  @media ${theme.device.sm} {
    margin-bottom: ${config.sectionMargin.sm}
  }

  @media ${theme.device.md} {
    margin-bottom: ${config.sectionMargin.md}
  }

  @media ${theme.device.lg} {
    margin-bottom: ${config.sectionMargin.lg}
  }
`

const GridColumn = styled.div``

const NavItem = styled.a`
  display: block;
`

const Fixed = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
`

const NotFixed = styled.div`
  margin-top: ${props => (props.marginTop) ? (props.marginTop) : null};
`

export {
  NavItem,
  Fixed,
  Grid,
  GridColumn,
  NotFixed
}
