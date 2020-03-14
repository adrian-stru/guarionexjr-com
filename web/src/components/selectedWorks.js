import React, {useRef, useContext, useState} from 'react'
import PortableText from './portableText'
import SelectedWorkImage from './selectedWorkImage'
import {useCurrentWidth, getDimensions} from '../lib/helpers'
import * as S from './selectedWorks.style'
import * as C from '../styles/common'
import {theme, config} from '../styles'

import {Context} from '../pages/index'

const SelectedWorks = ({images, description, slug, scrollY}) => {
  const ref = useRef(null)
  const {activeSection, setActiveSection} = useContext(Context)
  const clientWidth = useCurrentWidth()
  const widthWithoutPadding = clientWidth - (config.sitePaddingX * 2.0)
  const rows = (clientWidth >= theme.sizesInt.lg) ? 4.0 : (clientWidth >= theme.sizesInt.md) ? 3.0 : 2.0
  const columnGaps = (rows >= 4) ? 60 : (rows >= 3) ? 40 : 20
  const widthPerImage = (widthWithoutPadding - columnGaps) / rows

  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom && activeSection !== slug) {
    setActiveSection(slug)
  }

  return (
    <C.ProjectWrapper
      ref={ref}
      id='selected-works'>
      <S.ImagesWrapper>
        {images.map(image => {
          const [active, setActive] = useState(false)

          const clickHandler = e => {
            e.preventDefault()
        
            // toggle class that expands image and opens overlay
            const op = !active
            setActive(op)
            console.log('clicked')
          }

          return (
            <S.OuterImageWrapper
              active={active}
              h={(widthPerImage * image.asset.metadata.dimensions.height) / image.asset.metadata.dimensions.width}>
              <S.InnerImageWrapper>
                <SelectedWorkImage
                  image={image} />
              </S.InnerImageWrapper>
              <S.Overlay
                active={active}
                backgroundColor={image.asset.metadata.palette.dominant.background}>
                <S.OverlayCaption>{image.caption}</S.OverlayCaption>
              </S.Overlay>
              <S.OverlayCloseButton href='#' onClick={clickHandler}>+</S.OverlayCloseButton>
            </S.OuterImageWrapper>
          )})}
      </S.ImagesWrapper>
      <C.ProjectTitle>Selected Works</C.ProjectTitle>
      <C.ProjectDescriptionWrap>
        <PortableText
          blocks={description} />
      </C.ProjectDescriptionWrap>
    </C.ProjectWrapper>
  )
}

export default SelectedWorks
