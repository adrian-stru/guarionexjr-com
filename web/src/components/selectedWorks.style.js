import styled from 'styled-components'
import {theme} from '../styles'

const ImagesWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${theme.padding.base};
  row-gap: ${theme.padding.base};
  grid-row-gap: ${theme.padding.base};
  grid-column-gap: ${theme.padding.base};
  grid-row-gap: ${theme.padding.base};
  grid-column-gap: ${theme.padding.base};
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};

  @media ${theme.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
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
  z-index: 40;
  opacity: ${props => (props.active) ? 1 : 0};
  font-size: 18px;
  @media ${theme.device.sm} {
    font-size: 28px;
  }
`

const OuterImageWrapper = styled.div`
  position: relative;
  height: ${props => (props.h) ? `${props.h}px` : null};
  width: ${props => (props.active) ? '100%' : '50%'};
  :hover {
    width: 100%;
    height: 100%;
  }
  &:hover ${OverlayCloseButton} {
    opacity: 1;
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
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const OverlayCaption = styled.div`
  color: white;
  padding-left: ${theme.padding.basePx * 2}px;
  hyphens: auto;
  font-size: 14px;
  @media ${theme.device.sm} {
    font-size: 18px;
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
