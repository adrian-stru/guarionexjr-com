import styled from 'styled-components'
import {theme} from '../styles'

const ImagesWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: ${theme.padding.base};
  grid-row-gap: ${theme.padding.base};
  column-gap: ${theme.padding.base};
  grid-column-gap: ${theme.padding.base};
  margin-bottom: ${theme.padding.base};

  @media ${theme.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: ${theme.margin.base};
  }

  @media ${theme.device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const OverlayCloseButton = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${theme.padding.base};
  display: block;
  color: white;
  z-index: ${props => (props.active) ? 40 : -10};
  opacity: ${props => (props.active) ? 1 : 0};

  svg {
    transform: scale(0.95)
  }
  @media ${theme.device.md} {
    svg {
      transform: none;
    }
  }
`

const OuterImageWrapper = styled.div`
  position: relative;
  height: ${props => (props.h) ? `${props.h}px` : null};
  width: ${props => (props.active) ? '100%' : '50%'};
  :hover {
    width: 100%;
  }
  &:hover ${OverlayCloseButton} {
    opacity: 1;
    z-index: 40;
  }
`

const InnerImageWrapper = styled.div`
  width: 100%;
  line-height: 0;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  line-height: 0;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => `${props.backgroundColor}`};
  width: 100%;
  height: 100%;
  padding: ${theme.padding.base};
  z-index: 20;
  opacity: ${props => (props.active) ? 1 : 0}; 
  transition: ${props => (props.active) ? 'all .25s ease-in' : null};
`

const OverlayCaption = styled.div`
  color: white;
  padding-left: ${theme.padding.basePx * 2}px;
  hyphens: auto;
  font-size: 14px;
  @media ${theme.device.sm} {
    font-size: 18px;
  }
  p {
    margin: 0;
  }
`

export {
  ImagesWrapper,
  OuterImageWrapper,
  InnerImageWrapper,
  Image,
  Overlay,
  OverlayCloseButton,
  OverlayCaption
}
