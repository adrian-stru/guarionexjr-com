import React, {useContext, useRef} from 'react'
import PortableText from './portableText'
import ProjectImages from './projectImages'
import * as S from '../styles/common'
import {Context} from '../pages/index'
import {getDimensions, useCurrentWidth} from '../lib/helpers'

const Project = ({title, images, slug, description, scrollY}) => {
  const ref = useRef(null)
  const {activeSection, setActiveSection} = useContext(Context)
  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom && activeSection !== slug) {
    setActiveSection(slug)
  }
  const {imageHeight} = useCurrentWidth()


  return (
    <S.ProjectWrapper
      ref={ref}
      id={`project-${slug}`}
      mb={Math.ceil(imageHeight / 2)}
      mediumMb={Math.ceil(imageHeight / 4)}>
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
