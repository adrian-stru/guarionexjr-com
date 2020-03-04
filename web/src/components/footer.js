import React from 'react'
import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/all'
import * as S from './footer.style'

gsap.registerPlugin(ScrollToPlugin)

const Footer = () => {
  function handleClick (e) {
    e.preventDefault()

    gsap.to(window, {
      duration: 1,
      scrollTo: 0
    })
  }

  return (
    <S.Wrapper>
      <a href='#' onClick={handleClick}>Back to top <span className='punc'>&#8593;</span></a>
      <div>All works <span className='punc'>&copy;</span> Guarionex Rodriguez<span className='punc'>,</span> Jr<span className='punc'>.</span></div>
    </S.Wrapper>
  )
}

export default Footer
