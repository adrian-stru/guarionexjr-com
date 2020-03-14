import React from 'react'
import gsap from 'gsap'
import PortableText from './portableText'
import {ScrollToPlugin} from 'gsap/all'
import * as S from './footer.style'

gsap.registerPlugin(ScrollToPlugin)

const Footer = ({cv}) => {
  function handleClick (e) {
    e.preventDefault()

    gsap.to(window, {
      duration: 1,
      scrollTo: 0
    })
  }

  return (
    <S.Wrapper>
      <div></div>
      <div>
        <div id='cv'>
          <PortableText blocks={cv}/>
        </div>
        <a
          href='#'
          onClick={handleClick}>
            Back to top <span className='blink'>&#8593;</span>
        </a>
        <div>
          All works <span className='blink'>&copy;</span> Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Footer
