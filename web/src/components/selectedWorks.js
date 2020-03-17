import React, {useRef, useContext, useState} from 'react'
import PortableText from './portableText'
import SelectedWorkImage from './selectedWorkImage'
import {useCurrentWidth, getDimensions} from '../lib/helpers'
import * as S from './selectedWorks.style'
import * as C from '../styles/common'
import {theme} from '../styles'

import {Context} from '../pages/index'

const SelectedWorks = ({images, description, slug, scrollY}) => {
  const ref = useRef(null)
  const {activeSection, setActiveSection} = useContext(Context)
  const {width, imageHeight} = useCurrentWidth()
  const widthWithoutPadding = width - (theme.padding.basePx * 2.0)
  const columns = (width >= theme.sizesInt.lg) ? 4.0 : (width >= theme.sizesInt.md) ? 3.0 : 2.0
  const columnGaps = (columns >= 4) ? (theme.padding.basePx * 3) : (columns >= 3) ? (theme.padding.basePx * 2) : (theme.padding.basePx)
  const widthPerImage = (widthWithoutPadding - columnGaps) / columns

  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom && activeSection !== slug) {
    setActiveSection(slug)
  }

  return (
    <C.ProjectWrapper
      ref={ref}
      id='selected-works'
      mb={imageHeight / 4}>
      <S.ImagesWrapper
        mb={imageHeight / 8}>
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
              h={Math.ceil(widthPerImage * 1.25)}>
              <S.InnerImageWrapper>
                <SelectedWorkImage
                  image={image} />
              </S.InnerImageWrapper>
              <S.Overlay
                active={active}
                backgroundColor={image.asset.metadata.palette.dominant.background}>
                <S.OverlayCaption>{image.caption}</S.OverlayCaption>
              </S.Overlay>
              <S.OverlayCloseButton
                className='no-underline'
                onClick={clickHandler}
                active={active}>
                {(active) ? (<span>&times;</span>) : (<span>&#43;</span>)}
              </S.OverlayCloseButton>
            </S.OuterImageWrapper>
          )
        })}
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
