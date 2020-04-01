import React from 'react'
import ProjectImage from './projectImage'
import {useCurrentWidth} from '../lib/helpers'
import * as S from './projectImages.style'
import {theme} from '../styles'

const ProjectImages = ({images}) => {
  const ordering = []
  const {width, imageHeight} = useCurrentWidth()

  let leftImage = null
  for (const image of images) {
    if (image.highlight) {
      ordering.push(
        <SingleImage
          image={image}
          imageHeight={imageHeight}
          clientWidth={width} />
      )
      continue
    }

    if (leftImage === null) {
      leftImage = image
    } else {
      ordering.push(
        <DoubleImage
          leftImage={leftImage}
          rightImage={image}
          clientWidth={width} />
      )
      leftImage = null
    }
  }

  return (
    <S.Wrapper>
      {ordering.map(el => {
        return (
          <S.Row
            mbBase={Math.ceil(imageHeight / 4)}
            mediumMbBase={Math.ceil(imageHeight / 8)}>
            {el}
          </S.Row>
        )
      })}
    </S.Wrapper>
  )
}

const SingleImage = ({image, imageHeight}) => {
  const {aspectRatio} = image.asset.metadata.dimensions
  const imageWidth = aspectRatio * imageHeight

  return (
    <S.ImageWrap
      h={imageHeight}
      w={imageWidth}>
      <ProjectImage
        image={image} />
    </S.ImageWrap>
  )
}

const DoubleImage = ({leftImage, rightImage}) => {
  return (
    <S.Grid>
      <S.ImageWrap>
        <ProjectImage image={leftImage} />
      </S.ImageWrap>
      <S.ImageWrap>
        <ProjectImage image={rightImage} />
      </S.ImageWrap>
    </S.Grid>
  )
}

export default ProjectImages
