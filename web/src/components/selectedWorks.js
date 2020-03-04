import React from 'react'
import PortableText from './portableText'
import {useCurrentWidth} from '../lib/helpers'
import * as S from './selectedWorks.style'
import * as C from '../styles/common'
import {theme, config} from '../styles'

const SelectedWorks = ({images, description}) => {
  const clientWidth = useCurrentWidth()
  const widthWithoutPadding = clientWidth - (config.sitePaddingX * 2.0)
  const rows = (clientWidth >= theme.sizesInt.lg) ? 4.0 : (clientWidth >= theme.sizesInt.md) ? 3.0 : 2.0
  const widthPerImage = widthWithoutPadding / rows

  return (
    <C.ProjectWrapper id='selected-works'>
      <C.ProjectTitle>Selected Works</C.ProjectTitle>
      <C.ProjectDescriptionWrap>
        <PortableText blocks={description} />
      </C.ProjectDescriptionWrap>
      <S.ImagesWrapper>
        {images.map(image => (
          <S.OuterImageWrapper h={(widthPerImage * image.asset.metadata.dimensions.height) / image.asset.metadata.dimensions.width}>
            <S.InnerImageWrapper>
              <S.Image src={image.asset.url} />
            </S.InnerImageWrapper>
          </S.OuterImageWrapper>
        ))}
      </S.ImagesWrapper>
    </C.ProjectWrapper>
  )
}

export default SelectedWorks
