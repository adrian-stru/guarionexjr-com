import React, {useRef, useContext, useState} from 'react'
import PortableText from './portableText'
import SelectedWorkImage from './selectedWorkImage'
import {useCurrentWidth, getDimensions} from '../lib/helpers'
import OpenIcon from './icons/open.js'
import CloseIcon from './icons/close.js'

import * as S from './selectedWorks.style'
import * as C from '../styles/common'
import {theme} from '../styles'
import {Context} from '../pages/index'

const SelectedWorks = ({images, rawImages, description, slug, scrollY}) => {
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

  const activeList = []
  for (let i = 0; i < images.length; i++) {
    const [active, setActive] = useState(false)
    activeList.push({active, setActive})
  }

  return (
    <C.ProjectWrapper
      ref={ref}
      id='selected-works'>
      <S.ImagesWrapper
        mb={Math.ceil(imageHeight / 8)}>
        {images.map((image, index) => {
          const active = activeList[index].active
          const setActive = activeList[index].setActive

          const clickHandler = e => {
            e.preventDefault()

            const op = !active
            if (active === false) {
              for (let i = 0; i < images.length; i++) {
                activeList[i].setActive(false)
              }
            }
            setActive(op)
          }

          return (
            <S.OuterImageWrapper
              key={index}
              active={active}
              h={Math.ceil(widthPerImage * 1.25)}>
              <S.InnerImageWrapper>
                <SelectedWorkImage
                  image={image} />
              </S.InnerImageWrapper>
              <S.Overlay
                active={active}
                backgroundColor={image.asset.metadata.palette.dominant.background} >
                <S.OverlayCaption><PortableText blocks={rawImages[index].caption} /></S.OverlayCaption>
              </S.Overlay>
              <S.OverlayCloseButton
                className='no-underline blink'
                active={active}
                onClick={clickHandler}>
                {(active) ? (<CloseIcon />) : (<OpenIcon />)}
              </S.OverlayCloseButton>
            </S.OuterImageWrapper>
          )
        })}
      </S.ImagesWrapper>
      <C.ProjectDescriptionWrap>
        <PortableText
          blocks={description} />
      </C.ProjectDescriptionWrap>
    </C.ProjectWrapper>
  )
}

export default SelectedWorks
