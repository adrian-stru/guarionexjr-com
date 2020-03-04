import React from 'react'
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
        <img src={image.asset.url} />
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
            <img src={leftImage.asset.url} />
          </S.ImageWrap>
        </S.FlexBox>
        <S.FlexBox>
          <S.ImageWrap
            hotspot={rightImage.hotspot}>
            <img src={rightImage.asset.url} />
          </S.ImageWrap>
        </S.FlexBox>
      </S.FlexWrap>
    </S.Row>
  )
}

export default ProjectImages
