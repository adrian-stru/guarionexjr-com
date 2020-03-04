import styled from 'styled-components'
import {theme} from '../styles'

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  div:nth-child(2) {
    > p {
      margin-top: 120px;
    }
  }

  @media ${theme.device.lg} {
    div:nth-child(2) {
      > p {
        margin-top: 20px;
      }
    }
  }
  
`

const FlexBox = styled.div`
  width: 100%;
  @media ${theme.device.lg} {
    width: 50%;
  }
`

const NavItem = styled.a`
  display: block;
`

const Fixed = styled.div`
  position: fixed;
  z-index: 100;
`

export {
  FlexWrapper,
  FlexBox,
  NavItem,
  Fixed
}
