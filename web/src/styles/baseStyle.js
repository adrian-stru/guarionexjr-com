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

    .rave-2 {
        animation: rave 12s infinite ease-out;
      }
      
      @keyframes rave {
        0% {background-color: #00b89b;}
        10% {background-color: #000;}
        20% {background-color: #0033af;}
        30% {background-color: #000;}
        40% {background-color: #ffb835;}
        50% {background-color: #000;}
        60% {background-color: #972abc;}
        70% {background-color: #000;}
        80% {background-color: #d02c1e;}
        90% {background-color: #000;}
        100% {background-color: #00b89b;}
      }

      .rave {
        position: relative;
        ::before {
            content: '';
            position: absolute;
            top: -10%;
            left: 0;
            width: 100%;
            height: 110%;
            background: rgb(0,0,0);
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,184,155,1) 9%, rgba(0,0,0,1) 18%, rgba(0,51,175,1) 26%, rgba(0,0,0,1) 35%, rgba(255,184,53,1) 47%, rgba(0,0,0,1) 55%, rgba(151,42,188,1) 65%, rgba(0,0,0,1) 76%, rgba(208,44,30,1) 87%, rgba(0,0,0,1) 100%);
            background-size: 2000%;
            animation: hue-rotate 10s linear infinite;
            z-index: -1;
        }
      }

      .apply-hue-rotate {
          animation: hue-rotate 10s linear infinte;
          filter: brightness(400%)
      }

      @keyframes hue-rotate {
        from {
            -webkit-filter: hue-rotate(0);
            -moz-filter: hue-rotate(0);
            -ms-filter: hue-rotate(0);
            filter: hue-rotate(0);
          }
          to {
            -webkit-filter: hue-rotate(360deg);
            -moz-filter: hue-rotate(360deg);
            -ms-filter: hue-rotate(360deg);
            filter: hue-rotate(360deg);
          }
      }

      .rave2 {
        background: linear-gradient(0deg, rgba(0,0,0,1), rgba(0,184,155,1), rgba(0,0,0,1), rgba(0,51,175,1), rgba(0,0,0,1), rgba(255,184,53,1), rgba(0,0,0,1), rgba(151,42,188,1), rgba(0,0,0,1), rgba(208,44,30,1), rgba(0,0,0,1));
        animation: gradient 12.3s linear infinite;
        background-size: 100% 1500%;
      }

      @keyframes gradient {
        0% {background-position: 0% 0%;}
        100% {background-position: 100% 100%;}
        }

      @keyframes move {
          from {
              background-position: 0% 0%;
          }
          to {
              background-position: 0% 100%;
          }
        }

        .rave3 {
            position: relative;
            ::before {
                content: '';
                position: absolute;
                top: -10%;
                left: 0;
                width: 100%;
                height: 110%;
                background: rgb(0,184,155);
                background: linear-gradient(180deg, rgba(0,184,155,1) 0%, rgba(0,0,0,1) 87%, rgba(0,51,175,1) 89%, rgba(0,0,0,1) 91%, rgba(255,184,53,1) 92%, rgba(0,0,0,1) 94%, rgba(151,42,188,1) 96%, rgba(0,0,0,1) 98%, rgba(208,44,30,1) 100%);
                background-size: 100% 115%;
                animation: hue-rotate 10s linear infinite;
            }
        }

        .rave4 {
            background: rgb(0,184,155);
            background: linear-gradient(180deg, rgba(0,184,155,1) 0%, rgba(0,0,0,1) 12%, rgba(0,51,175,1) 24%, rgba(0,0,0,1) 36%, rgba(255,184,53,1) 48%, rgba(0,0,0,1) 60%, rgba(151,42,188,1) 72%, rgba(0,0,0,1) 84%, rgba(208,44,30,1) 96%, rgba(0,0,0,1) 100%);
        }

        .rave5 {
            background: rgb(0,184,155);
            background: linear-gradient(180deg, rgba(0,184,155,1) 0%, rgba(0,0,0,1) 7%, rgba(0,0,0,1) 11%, rgba(0,51,175,1) 20%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 29%, rgba(255,184,53,1) 42%, rgba(0,0,0,1) 52%, rgba(0,0,0,1) 56%, rgba(151,42,188,1) 72%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 85%, rgba(208,44,30,1) 96%, rgba(0,0,0,1) 100%);
            background-size: 100% 200%;
            animation: movedown 5s linear infinite alternate;
        }

        @keyframes movedown {
            from {
                background-position: 0% 0%;
            }  
            to {
                background-position: 100% 100%;
            }
        }
`

export default BaseStyle
