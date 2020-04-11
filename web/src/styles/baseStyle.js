import {createGlobalStyle} from 'styled-components'
import theme from './theme'

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
        line-height: 18px;
        @media ${theme.device.sm} {
            font-size: 18px;
            line-height: 22px;
        }
    }
    div {
        line-height: 18px;
        @media ${theme.device.sm} {
            line-height: 22px;
        }
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
        margin-block-start: 18px;
        margin-block-end: 18px;
        @media ${theme.device.sm} {
            margin-block-start: 22px;
            margin-block-end: 22px;
        }
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
        60% {opacity: 1;}
        61% {opacity: 0;}
        100% {opacity: 0;}
    }

    .rave {
        background: repeating-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(26,144,145,1) 5%, rgba(0,0,0,1) 12%, rgba(15,54,150,1) 18.5%, rgba(140,48,171,1) 20%, rgba(0,0,0,1) 33%, rgba(191,139,42,1) 37%, rgba(0,0,0,1) 40.5%, rgba(189,28,14,1) 45%, rgba(0,0,0,1) 50%);
        background-size: 100% 200%;
        background-position: 0% 0%;
        animation: pulse-down 6s linear infinite;
    }

    @keyframes pulse-down {
        from {
            background-position: 0% 0%;
        }  
        to {
            background-position: 0% 100%;
        }
    }
`

export default BaseStyle
