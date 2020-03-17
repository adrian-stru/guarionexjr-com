import styled from 'styled-components'
import {theme} from '../styles'

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => (props.time) ? timeToBackgroundColor(props.time) : null};
  color: ${props => (props.time) ? timeToFontColor(props.time) : null};
  padding: ${theme.padding.base};
`

function timeToFontColor (time) {
  const hours = time.getHours()
  return (hours >= 8 && hours <= 16) ? 'black' : 'white'
}

function timeToBackgroundColor (time) {
  const totalMinutes = (time.getHours() * 60) + time.getMinutes()
  const whiteOffset = (totalMinutes < 720) ? totalMinutes : 1440 - totalMinutes
  const rgbVal = (whiteOffset * 255) / 720

  return `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`
}

export {StyledLayout}
