import styled from 'styled-components'
import {theme, config} from '../styles'

const Wrapper = styled.div`
  display: grid;

  @media ${theme.device.lg} {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  div {
    padding: 125px 0;
  }
`

export {Wrapper}
