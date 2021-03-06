import React, {useRef, useContext, useEffect} from 'react'
import PortableText from './portableText'
import {Context} from '../pages/index'
import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/all'
import {useCurrentWidth, useCurrentNYTime, getDimensions, isInstagram} from '../lib/helpers'
import * as S from './header.style'
import {theme} from '../styles'
import { useState } from 'react'

gsap.registerPlugin(ScrollToPlugin)

const Header = ({about, secondary, contact, projects, scrollY}) => {
  const ref = useRef(null) 
  const context = useContext(Context)
  const {activeSection, setActiveSection} = context
  const {imageHeight} = useCurrentWidth()
  const time = useCurrentNYTime()
  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  const [emailClickMsg, setEmailClickMsg] = useState('')

  if (dimensions && scrollY >= 0 && scrollY < dimensions.offsetBottom) {
    if (activeSection !== null) {
      setActiveSection(null)
    }
  }

  const handleNavItemClick = (id, e) => {
    e.preventDefault()
    const anchor = '#' + id

    if (document.querySelector(anchor) === null) {
      return
    }

    gsap.to(window, {
      duration: 1,
      scrollTo: anchor,
      autoKill: true
    })
  }

  const handleCvClick = (e) => {
    e.preventDefault()

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: '#cv',
        offsetY: 50
      },
      autoKill: true
    })
  }

  const handleTitleClick = (e) => {
    e.preventDefault()

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: 0,
        autoKill: true
      }
    })
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    let textField = document.createElement('textarea')
    textField.innerText = 'guario.photo@gmail.com'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()

    setEmailClickMsg('Copied')
    setTimeout(() => setEmailClickMsg(''), 1000)
  }

  return (
    <S.Grid
      ref={ref}
      mb={(imageHeight / 8) - theme.margin.basePx}
      isInstagram={isInstagram}>
      <S.GridColumn>
        <S.Fixed>
          {projects.map((project) => (
            <S.NavItem
              className={(activeSection === project.slug.current) ? 'blink no-underline' : 'no-underline'}
              href='#'
              key={project.id}
              onClick={(e) => handleNavItemClick(`project-${project.slug.current}`, e)}>
              {project.title}
            </S.NavItem>
          ))}
          <S.NavItem
            className={(activeSection === 'selectedWorks') ? 'blink no-underline' : 'no-underline'}
            href='#'
            onClick={(e) => handleNavItemClick('selected-works', e)}>
            Selected Works
          </S.NavItem>
        </S.Fixed>
        <S.NotFixed
          marginTop={`calc(${(projects.length + 2) * (theme.padding.basePx * 2)}px)`}>
          <PortableText blocks={secondary} />
        </S.NotFixed>
      </S.GridColumn>
      <S.GridColumn>
        <S.Fixed>
          <a className='no-underline'
            onClick={handleTitleClick}>
            <div>Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span></div>
          </a>
        </S.Fixed>
        <S.NotFixed
          mt={theme.margin.base}
          mtSm={theme.margin.sm}>
          <div>
            {(time.getHours() % 12 === 0) ? 12 : (time.getHours() % 12) }
            <span className='blink'>:</span>
            {time.getMinutes().toString().padStart(2, 0)}
            <span className='blink'>:</span>
            {time.getSeconds().toString().padStart(2, 0)}
            {(time.getHours() >= 12) ? 'PM' : 'AM'}
            <br />
            Brooklyn<span className='blink'>,</span> New York
          </div>
          <PortableText blocks={about} />
          <p>
            <S.NavItem
              className='no-underline'
              onClick={(e) => handleCvClick(e)}>
              <span className='blink'>&darr;</span> view CV
            </S.NavItem>
          </p>
          <S.ContactWrap>
            <a onClick={handleEmailClick}>Email</a> <span>{emailClickMsg}</span>
            <PortableText blocks={contact} />
          </S.ContactWrap>
        </S.NotFixed>
      </S.GridColumn>
    </S.Grid>
  )
}

export default Header
