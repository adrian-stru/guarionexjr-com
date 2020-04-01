import React, {useState} from 'react'
import Header from './header'
import SEO from './seo'
import Footer from './footer'
import {useCurrentNYTime, isInstagram, useCustomTime} from '../lib/helpers'
import {BaseStyle} from '../styles'
import * as S from './layout.style'

const Layout = ({site, seoTitle, projects, scrollY, details, children}) => {
  const time = useCurrentNYTime()

  /*
  Debugging

  const hour = 4 // 0-23
  const minute = 0 // 0-59
  const speedMultiplier = (60 * 1) // > 1
  const time = useCustomTime(hour, minute, speedMultiplier)
  */

  return (
    <S.StyledLayout
      className='rave5'
      /* className={(time.getHours() < 4) ? 'rave5' : null} */
      isInstagram={isInstagram}
      time={time} >
      <BaseStyle />
      <SEO />
      <Header
        scrollY={scrollY}
        about={details._rawAbout}
        secondary={details._rawSecondary}
        contact={details._rawContact}
        projects={projects} />
      {children}
      <Footer
        scrollY={scrollY}
        cv={details._rawCv} />
    </S.StyledLayout>
  )
}

export default Layout
