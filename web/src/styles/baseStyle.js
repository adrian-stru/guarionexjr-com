import {createGlobalStyle} from 'styled-components'
import theme from './theme'
const {colors, fontSizes, fonts} = theme

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

const BaseStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html,
    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
        background-color: ${props => (timeToBackgroundColor(props.time))};
        color: ${props => (timeToFontColor(props.time))};
        font-family: ${fonts.sans};
        font-size: 18px;
    }
    h1, h2, h3, h4, h5, h6 {
        letter-spacing: -.025em;
        margin: 0 0 10px;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    image {
        width: 100%;
        height: auto;
    }

    .punc {
        opacity: ${props => (props.time.getSeconds() % 2 === 0) ? 1 : 0};
    }
`

export default BaseStyle
