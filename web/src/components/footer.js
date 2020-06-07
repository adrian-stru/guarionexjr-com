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
      mt={Math.ceil(imageHeight / 4)}
      mediumMt={Math.ceil(imageHeight / 2)}
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
            <span>Website designed by <a href='https://miguelgaydo.sh' target='_blank'>Miguel Gaydosh</a></span><span className='blink'>.</span>
          </div>
          <div>
            <span>Type set in Artisan Selectric by <a href='https://www.kylaarsadjaja.com/' target='_blank'>Kyla Arsadjaja</a></span><span className='blink'>.</span>
          </div>
          <div>
            <span className='blink'>&copy;</span> All works Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span>
          </div>
          <div>
            <span className='blink'>*</span>  All tweets are for the gang and the crew<span className='blink'>.</span> A privilege<span className='blink'>.</span> Using it against me is frowned upon <span className='blink'>:(</span>
          </div>
        </div>
      </S.GridItem>
    </S.Grid>
  )
}

export default Footer
