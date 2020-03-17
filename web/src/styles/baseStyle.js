import {createGlobalStyle} from 'styled-components'
import theme from './theme'
import config from './config'

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
        font-family: ${theme.fonts.sans};
        font-size: 14px;
        @media ${theme.device.sm} {
            font-size: 18px;
        }
        line-height: 22px;
    }
    div {
        line-height: 22px;
    }
    h1, h2, h3, h4, h5, h6 {
        letter-spacing: -.025em;
        margin: 0 0 10px;
        font-weight: 700;
    }
    a {
        text-decoration: underline;
        color: inherit;
        cursor: pointer;
        :hover {
            opacity: .33;
        }
        transition: opacity .5s;
    }
    p {
        margin-block-start: 22px;
        margin-block-end: 22px;
    }
    image {
        width: 100%;
        height: auto;
    }
    figure {
        margin: 0;
    }

    .no-underline {
        text-decoration: none;
    }

    .italic {
        font-family: 'Relative-Book-Italic'
    }

    .blink {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {opacity: 1;}
        59% {opacity: 1;}
        60% {opacity: 0;}
        99% {opacity: 1;}
        100% {opacity: 1;}
    }


`

export default BaseStyle
