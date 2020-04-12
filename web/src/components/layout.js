import React, {useState, useEffect} from 'react'
import Header from './header'
import Footer from './footer'
import {useCurrentNYTime, isInstagram, useCustomTime} from '../lib/helpers'
import {RAVE_START_MINUTES, RAVE_END_MINUTES} from '../lib/background-colors'
import {BaseStyle} from '../styles'
import * as S from './layout.style'

const Layout = ({projects, scrollY, details, children}) => {
  /*
  // Debugging

  const hour = 18 // 0-23
  const minute = 45 // 0-59
  const speedMultiplier = (1) // > 1
  const time = useCustomTime(hour, minute, speedMultiplier)
  */

  const time = useCurrentNYTime()

  const nowInMinutes = time.getHours() * 60 + time.getMinutes()

  return (
    <S.StyledLayout
      className={(nowInMinutes >= RAVE_START_MINUTES && nowInMinutes < RAVE_END_MINUTES) ? 'rave' : null}
      isInstagram={isInstagram}
      time={time} >
      <BaseStyle />
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
