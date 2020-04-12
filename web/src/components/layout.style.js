import styled from 'styled-components'
import {theme} from '../styles'
import {
  colors,
  SUNRISE_START_QUARTERS,
  SUNRISE_END_QUARTERS,
  BUSINESS_HOURS_START_QUARTERS,
  BUSINESS_HOURS_END_QUARTERS,
  SUNSET_START_QUARTERS,
  SUNSET_END_QUARTERS,
} from '../lib/background-colors'

function getFontColor (time) {
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)

  if (quartersElapsed < BUSINESS_HOURS_START_QUARTERS || quartersElapsed > BUSINESS_HOURS_END_QUARTERS) {
    return '#fff'
  }

  return '#000'
}

function getBackgroundColor (time) {
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)

  return colors[quartersElapsed].from
}

function getBackgroundGradient (time) {
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)

  if (quartersElapsed > SUNSET_END_QUARTERS || quartersElapsed < SUNRISE_START_QUARTERS) {
    return '#000'
  }

  if (quartersElapsed > BUSINESS_HOURS_START_QUARTERS && quartersElapsed < BUSINESS_HOURS_END_QUARTERS) {
    return '#fafafa'
  }

  const minutesMod15 = time.getMinutes() % 15
  const seconds = (minutesMod15 * 60) + time.getSeconds()
  const fromCoverage = (seconds >= 450) ? 100 : ((seconds / 450) * 100).toFixed(2)
  const toCoverage = (seconds <= 450) ? 0 : (((seconds - 450) / 450) * 100).toFixed(2)
  const color = colors[quartersElapsed]

  console.log(`linear-gradient(${color.angle},  ${color.to} ${toCoverage}%, ${color.from} ${fromCoverage}%)`)

  return `linear-gradient(${color.angle},  ${color.to} ${toCoverage}%, ${color.from} ${fromCoverage}%)`
}

const StyledLayout = styled.div`
  margin-top: ${props => props.mt};
  width: 100%;
  height: 100%;
  background: ${props => (props.time) ? getBackgroundColor(props.time) : null};
  background: ${props => (props.time) ? getBackgroundGradient(props.time) : 'red'};
  color: ${props => (props.time) ? getFontColor(props.time) : null};
  padding: ${theme.padding.base};
  padding-top: ${props => (props.isInstagram) ? '28px' : null};
`

export {StyledLayout}
