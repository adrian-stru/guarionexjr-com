import React, {useContext, useRef} from 'react'
import PortableText from './portableText'
import ProjectImages from './projectImages'
import * as S from '../styles/common'
import {Context} from '../pages/index'
import {getDimensions} from '../lib/helpers'

const Project = ({title, images, slug, description, scrollY}) => {
  const ref = useRef(null)
  const {activeSection, setActiveSection} = useContext(Context)
  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom && activeSection !== slug) {
    setActiveSection(slug)
  }

  return (
    <S.ProjectWrapper
      ref={ref}
      id={`project-${slug}`}>
      <ProjectImages
        images={images}/>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDescriptionWrap>
        <PortableText
          blocks={description}/>
      </S.ProjectDescriptionWrap>
    </S.ProjectWrapper>
  )
}

export default Project
