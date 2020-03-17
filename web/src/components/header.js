import React, {useRef, useContext} from 'react'
import PortableText from './portableText'
import {Context} from '../pages/index'
import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/all'
import {useCurrentWidth, useCurrentNYTime, getDimensions} from '../lib/helpers'
import * as S from './header.style'
import {theme} from '../styles'

gsap.registerPlugin(ScrollToPlugin)

const Header = ({about, secondary, contact, projects, scrollY}) => {
  const ref = useRef(null)
  const context = useContext(Context)
  const {activeSection, setActiveSection} = context
  const {imageHeight} = useCurrentWidth()
  const time = useCurrentNYTime()
  const dimensions = (ref.current) ? getDimensions(ref.current) : null
  if (dimensions && scrollY >= dimensions.offsetTop && scrollY <= dimensions.offsetBottom) {
    if (activeSection !== null) {
      setActiveSection(null)
    }
  }

  const handleNavItemClick  = (id, e) => {
    e.preventDefault()
    const anchor = '#' + id

    if (document.querySelector(anchor) === null) {
      return
    }

    gsap.to(window, {
      duration: 1,
      scrollTo: anchor
    })
  }

  return (
    <S.Grid
      mb={(imageHeight / 4) - 22}
      ref={ref}>
      <S.GridColumn>
        <S.Fixed>
          {projects.map((project) => (
            <S.NavItem
              className={(activeSection === project.slug.current) ? 'blink no-underline italic' : 'no-underline italic'}
              href='#'
              key={project.id}
              onClick={(e) => handleNavItemClick(`project-${project.slug.current}`, e)}>
              {project.title}
            </S.NavItem>
          ))}
          <S.NavItem
            className={(activeSection === 'selectedWorks') ? 'blink no-underline italic' : 'no-underline italic'}
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
          <div>Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span></div>
        </S.Fixed>
        <S.NotFixed marginTop={theme.margin.base}>
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
              onClick={(e) => handleNavItemClick('cv', e)}>
              <span className='blink'>&darr;</span> view CV
            </S.NavItem>
          </p>
          <PortableText blocks={contact} />
        </S.NotFixed>
      </S.GridColumn>
    </S.Grid>
  )
}

export default Header
