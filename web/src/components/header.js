import React, {useRef, useContext} from 'react'
import PortableText from './portableText'
import {Context} from '../pages/index'
import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/all'
import {useCurrentWidth, useCurrentNYTime, getDimensions} from '../lib/helpers'
import * as S from './header.style'

gsap.registerPlugin(ScrollToPlugin)

const Header = ({about, secondary, contact, projects, scrollY}) => {
  const ref = useRef(null)
  const context = useContext(Context)
  const {activeSection, setActiveSection} = context
  const width = useCurrentWidth()
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

  if (width === 0 || typeof(window) === undefined) {
    return (
      <div>
        ...loading
      </div>
    )
  }

  const lineHeight = 23

  if (width < 576) {
    return (
      <div
        ref={ref}>
        <S.Fixed>
          <div>Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span></div>
          <br/>
          {projects.map((project) => (
              <S.NavItem
                className={(activeSection === project.slug.current) ? 'blink' : null}
                href='#'
                key={project.id}
                onClick={(e) => handleNavItemClick(`project-${project.slug.current}`, e)}>
                {project.title}
              </S.NavItem>
            ))}
            <S.NavItem
              className={(activeSection === 'selectedWorks') ? 'blink' : null}
              href='#'
              onClick={(e) => handleNavItemClick('selected-works', e)}>
              Selected Works
            </S.NavItem>
        </S.Fixed>
        <S.NotFixed marginTop={`calc(${(projects.length + 3) * lineHeight}px + 1em)`}>
          <PortableText blocks={secondary} />
          <p>
            {(time.getHours() % 12 === 0) ? 12 : (time.getHours() % 12) }
              <span className='blink'>:</span>
              {time.getMinutes().toString().padStart(2, 0)}
              <span className='blink'>:</span>
              {time.getSeconds().toString().padStart(2, 0)}
              {(time.getHours() >= 12) ? 'PM' : 'AM'}
              <br />
              Brooklyn<span className='blink'>,</span> New York
          </p>
          <PortableText blocks={about} />
          <p>
            <S.NavItem
              href='#'
              onClick={(e) => handleNavItemClick('cv', e)}>
              View Partial CV <span className='blink'>&darr;</span>
            </S.NavItem>
          </p>
          <PortableText blocks={contact} />
        </S.NotFixed>
      </div>
    )
  }

  return (
    <S.Grid
      ref={ref}>
        <S.GridColumn>
          <S.Fixed>
            {projects.map((project) => (
              <S.NavItem
                className={(activeSection === project.slug.current) ? 'blink' : null}
                href='#'
                key={project.id}
                onClick={(e) => handleNavItemClick(`project-${project.slug.current}`, e)}>
                {project.title}
              </S.NavItem>
            ))}
            <S.NavItem
              className={(activeSection === 'selectedWorks') ? 'blink' : null}
              href='#'
              onClick={(e) => handleNavItemClick('selected-works', e)}>
              Selected Works
            </S.NavItem>
          </S.Fixed>
          <S.NotFixed 
            marginTop={`calc(${(projects.length + 1) * lineHeight}px + 1em)`}>
            <PortableText blocks={secondary} />
          </S.NotFixed>
        </S.GridColumn>
        <S.GridColumn>
          <S.Fixed>
            <div>Guarionex Rodriguez<span className='blink'>,</span> Jr<span className='blink'>.</span></div>
          </S.Fixed>
          <S.NotFixed marginTop={`1em`}>
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
                href='#'
                onClick={(e) => handleNavItemClick('cv', e)}>
                View Partial CV <span className='blink'>&darr;</span>
              </S.NavItem>
            </p>
            <PortableText blocks={contact} />
          </S.NotFixed>
        </S.GridColumn>
    </S.Grid> 
  )
}

export default Header
