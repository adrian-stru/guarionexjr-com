import styled from 'styled-components'
import {theme} from '../styles'

const ProjectWrapper = styled.article`
  overflow-y: scroll;
  margin-bottom: ${props => (props.mb) ? `${props.mb}px` : null};
`

const ProjectTitle = styled.h2`
  font-family: 'Relative-Book-Italic';
  margin: 0;
  font-size: 14px;
  @media ${theme.device.sm} {
    font-size: 18px;
  }
`

const ProjectDescriptionWrap = styled.div`
  display: grid;
  p {
    margin: 0;
  }

  @media ${theme.device.md} {
    grid-template-columns: 1fr 1fr;
    column-gap: ${theme.padding.base};
  }
`

export {ProjectWrapper, ProjectTitle, ProjectDescriptionWrap}
