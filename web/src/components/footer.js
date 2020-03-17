import React, {useContext, useRef} from 'react'
import gsap from 'gsap'
import PortableText from './portableText'
import {ScrollToPlugin} from 'gsap/all'
import {useCurrentWidth, getDimensions} from '../lib/helpers'
import {Context} from '../pages/index'
import * as S from './footer.style'

gsap.registerPlugin(ScrollToPlugin)

const Footer = ({cv, scrollY}) => {
  const ref = useRef(null)
  const context = useContext(Context)
  const {imageHeight} = useCurrentWidth()
  const {activeSection, setActiveSection} = context
  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom) {
    if (activeSection !== null) {
      setActiveSection(null)
    }
  }

  function handleClick (e) {
    e.preventDefault()

    gsap.to(window, {
      duration: 1,
      scrollTo: 0
    })
  }

  return (
    <S.Grid
      ref={ref}
      mb={Math.ceil(imageHeight / 4)}>
      <S.GridItem />
      <S.GridItem>
        <S.CvWrapper
          id='cv'
          mb={Math.ceil(imageHeight / 8)}>
          <PortableText blocks={cv} />
        </S.CvWrapper>
        <S.BackToTopWrapper
          className='no-underline'
          onClick={handleClick}
          mb={Math.ceil(imageHeight / 8)}>
          <span className='blink'>&#8593;</span> back to top
        </S.BackToTopWrapper>
        <div>
          <div>
            <span className='blink'>&copy;</span> all works Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span>
          </div>
          <div>
            <span className='blink'>*</span>  all tweets are my own and should be taken with a beer and a shot <span className='blink'>:)</span>
          </div>
        </div>
      </S.GridItem>
    </S.Grid>
  )
}

export default Footer
