import React from 'react'
import ProjectImage from './projectImage'
import {useCurrentWidth} from '../lib/helpers'
import * as S from './projectImages.style'
import {config} from '../styles'

const ProjectImages = ({images}) => {
  const ordering = []

  let width = useCurrentWidth()

  let leftImage = null
  for (const image of images) {
    if (image.highlight) {
      ordering.push(
        <SingleImage
          image={image}
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
        return el
      })}
    </S.Wrapper>
  )
}

const SingleImage = ({image, clientWidth}) => {
  return (
    <S.Row>
      <S.ImageWrap
        hotspot={image.hotspot}>
        <ProjectImage image={image} />
      </S.ImageWrap>
    </S.Row>
  )
}

const DoubleImage = ({leftImage, rightImage, clientWidth}) => {
  const {height, width} = leftImage.asset.metadata.dimensions
  const imageWidth = (clientWidth - config.projectGutter - ((config.sitePaddingX) * 2)) / 2
  const imageHeight = (height * imageWidth) / width

  return (
    <S.Row h={imageHeight}>
      <S.FlexWrap>
        <S.FlexBox>
          <S.ImageWrap
            hotspot={leftImage.hotspot}>
            <ProjectImage image={leftImage} />
          </S.ImageWrap>
        </S.FlexBox>
        <S.FlexBox>
          <S.ImageWrap
            hotspot={rightImage.hotspot}>
            <ProjectImage image={rightImage} />
          </S.ImageWrap>
        </S.FlexBox>
      </S.FlexWrap>
    </S.Row>
  )
}

export default ProjectImages
