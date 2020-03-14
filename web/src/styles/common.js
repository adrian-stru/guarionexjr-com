import styled from 'styled-components'
import {theme, config} from '../styles'

const ProjectWrapper = styled.article`
  overflow-y: scroll;
  margin-bottom: 50px;
`

const ProjectTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`

const ProjectDescriptionWrap = styled.div`
  display: grid;

  @media ${theme.device.lg} {
    grid-template-columns: 1fr 1fr;
    column-gap: ${config.universalPadding.lg};
  }
`

export {ProjectWrapper, ProjectTitle, ProjectDescriptionWrap}