import styled from 'styled-components'
import {theme} from '../styles'
const {device} = theme

// Root

const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
`

// Common

const Row = styled.div`
  margin-bottom: 130px;
`

const ImageWrap = styled.div`
  height: ${props => (props.h) ? `${props.h}px` : 'auto'};
  width: ${props => (props.width) ? `${props.width}px` : '100%'};
  margin: 0 auto;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    object-fit: cover;
    object-position: ${props => (props.hotspot ? `${props.hotspot.x * 100}% ${props.hotspot.y * 100}%` : 'initial')}
  }

  @media ${device.lg} {
    height: 100%;
  }
`

// Double Image

const FlexWrap = styled.div`
  display: block;

  @media ${device.lg} {
    display: flex;

    & > div:first-child {
      padding-right: 11px;
    }

    & > div:nth-child(2) {
      padding-left: 11px;
    }
  }
`

const FlexBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
 
  @media ${device.lg} {
    width: 50%;
    margin: 0;
  }
`

export {
  Wrapper,
  ImageWrap,
  Row,
  FlexWrap,
  FlexBox
}
