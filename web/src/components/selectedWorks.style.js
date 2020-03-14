import styled from 'styled-components'
import {theme} from '../styles'

const ImagesWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;

  @media ${theme.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${theme.device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
  /*
  position: relative;
  width: ${props => (props.active) ? '100%' : '50%'};
  min-height: ${props => (props.h) ? `${props.h}px` : 'inital'};
  height: 100%;
  line-height: 0;
  :hover > div {
    width: 100%;
    height: 100%;
  }
  > div {
    height: ${props => (props.active) ? '100%' : null};
    width: ${props => (props.active ? '100%' : null)};
  }
  

  @media ${theme.device.md} {
    width: 33.33%;
  }

  @media ${theme.device.lg} {
    width: 25%;
  }
  */
`

const InnerImageWrapper = styled.div`
  width: 100%;
  line-height: 0;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
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
  padding: 10px;
  z-index: 20;
  opacity: ${props => (props.active) ? 1 : 0};
  transition: all 1.25s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const OverlayCloseButton = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  display: block;
  color: white;
  z-index: 40;
`

const OverlayCaption = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 18px;
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
