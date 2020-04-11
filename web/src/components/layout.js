import React from 'react'
import Header from './header'
import Footer from './footer'
import {useCurrentNYTime, isInstagram, useCustomTime} from '../lib/helpers'
import {BaseStyle} from '../styles'
import * as S from './layout.style'

const Layout = ({projects, scrollY, details, children}) => {

  const time = useCurrentNYTime()
  const quartersElapsed = (time.getHours() * 4) + Math.floor(time.getMinutes() / 15)
  const minutesMod15 = time.getMinutes() % 15
  const seconds = (minutesMod15 * 60) + time.getSeconds()
  const fromCoverage = (seconds >= 450) ? 100 : ((seconds / 450) * 100).toFixed(2)
  const toCoverage = (seconds <= 450) ? 0 : (((seconds - 450) / 450) * 100).toFixed(2)

  /*
  Debugging

  const hour = 2 // 0-23
  const minute = 0 // 0-59
  const speedMultiplier = (60 * 1) // > 1
  const time = useCustomTime(hour, minute, speedMultiplier)
  */

  return (
    <S.StyledLayout
      className={(time.getHours() < 4) ? 'rave' : null}
      isInstagram={isInstagram}
      quartersElapsed={quartersElapsed}
      fromCoverage={fromCoverage}
      toCoverage={toCoverage} >
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
