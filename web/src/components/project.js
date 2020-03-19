import React, {useContext, useRef} from 'react'
import PortableText from './portableText'
import ProjectImages from './projectImages'
import * as S from '../styles/common'
import {Context} from '../pages/index'
import {getDimensions, useCurrentWidth} from '../lib/helpers'
import {theme} from '../styles'

const Project = ({title, images, slug, description, scrollY}) => {
  const ref = useRef(null)
  const {activeSection, setActiveSection} = useContext(Context)
  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom && activeSection !== slug) {
    setActiveSection(slug)
  }

  const {imageHeight} = useCurrentWidth()
  const marginBottom = imageHeight / 4

  return (
    <S.ProjectWrapper
      ref={ref}
      id={`project-${slug}`}
      mb={marginBottom}>
      <ProjectImages
        images={images} />
      <S.ProjectDescriptionWrap>
        <PortableText
          blocks={description} />
      </S.ProjectDescriptionWrap>
    </S.ProjectWrapper>
  )
}

export default Project
