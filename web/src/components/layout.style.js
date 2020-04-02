import styled from 'styled-components'
import {theme} from '../styles'
import colors from '../lib/background-colors'

function timeToFontColor (time) {
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)

  if (quartersElapsed < 16) {
    return '#fff'
  }

  if (quartersElapsed >= 16 && quartersElapsed <= 26) {
    return '#fff'
  }

  if (quartersElapsed > 26 && quartersElapsed < 74) {
    return '#000'
  }

  if (quartersElapsed >= 74) {
    return '#fff'
  }
}

/*
function timeToBackgroundColor (time) {
  const totalMinutes = (time.getHours() * 60) + time.getMinutes()
  const whiteOffset = (totalMinutes < 720) ? totalMinutes : 1440 - totalMinutes
  const rgbVal = Math.round((whiteOffset * 255) / 720)

  return `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`
}
*/

function timeToBackgroundColor (time) {
  const offset = 16
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)

  if (quartersElapsed < 16) {
    return null
  }

  if (quartersElapsed > 26 && quartersElapsed < 74) {
    return '#f5f5f5'
  }

  if (quartersElapsed > 84) {
    return '#000'
  }

  return colors[quartersElapsed - offset].from
}

function timeToBackgroundGradient (time) {
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)

  // rave hours
  if (quartersElapsed < 16) {
    return null
  }

  // business hours
  if (quartersElapsed > 26 && quartersElapsed < 74) {
    return null
  }

  // night hours
  if (quartersElapsed > 84) {
    return null
  }

  const minutesMod15 = time.getMinutes() % 15
  const seconds = (minutesMod15 * 60) + time.getSeconds()
  const fromCoverage = (seconds >= 450) ? 100 : Math.round((seconds / 450) * 100)
  const toCoverage = (seconds <= 450) ? 0 : Math.round(((seconds - 450) / 450) * 100)
  const color = colors[quartersElapsed - 16]

  return `linear-gradient(${color.angle},  ${color.to} ${toCoverage}%, ${color.from} ${fromCoverage}%)`
}

const StyledLayout = styled.div`
  margin-top: ${props => props.mt};
  width: 100%;
  height: 100%;
  background: ${props => (props.time) ? timeToBackgroundColor(props.time) : null};
  background: ${props => (props.time) ? timeToBackgroundGradient(props.time) : null};
  color: ${props => (props.time) ? timeToFontColor(props.time) : null};
  padding: ${theme.padding.base};
  padding-top: ${props => (props.isInstagram) ? '28px' : null};
`

export {StyledLayout}
