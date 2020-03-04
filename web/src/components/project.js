import React from 'react'
import PortableText from './portableText'
import ProjectImages from './projectImages'
import * as S from '../styles/common'

const Project = ({title, images, slug, description}) => {
  return (
    <S.ProjectWrapper id={`project-${slug}`}>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDescriptionWrap>
        <PortableText blocks={description} />
      </S.ProjectDescriptionWrap>
      <ProjectImages images={images} />
    </S.ProjectWrapper>
  )
}

export default Project
