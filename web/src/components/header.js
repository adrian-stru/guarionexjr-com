import React from 'react'
import PortableText from './portableText'
import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/all'
import {useCurrentWidth} from '../lib/helpers'
import {theme} from '../styles'
import * as S from './header.style'

gsap.registerPlugin(ScrollToPlugin)

const Header = ({about, projects, time}) => {
  function handleNavItemClick (id, e) {
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

  const width = useCurrentWidth()

  return (
    <S.FlexWrapper>
      <S.FlexBox>
        <S.Fixed>
          {(width < theme.sizesInt.lg) ? (
            <React.Fragment>
              <div>Guarionex Rodriguez<span className='punc'>,</span> Jr<span className='punc'>.</span></div>
              <br />
            </React.Fragment>
          ) : null}
          {projects.map((project) => (
            <S.NavItem
              href='#'
              key={project.id}
              onClick={(e) => handleNavItemClick(`project-${project.slug.current}`, e)}>
              {project.title}
            </S.NavItem>
          ))}
          <S.NavItem
            href='#'
            onClick={(e) => handleNavItemClick('selected-works', e)}>
            Selected Works
          </S.NavItem>
        </S.Fixed>
      </S.FlexBox>
      <S.FlexBox>
        <S.Fixed>
          {(width >= theme.sizesInt.lg) ? (
            <div>Guarionex Rodriguez<span className='punc'>,</span> Jr<span className='punc'>.</span></div>
          ) : null}
        </S.Fixed>
        <p>
          {(time.getHours() % 12 === 0) ? 12 : (time.getHours() % 12) }
          <span className='punc'>:</span>
          {time.getMinutes().toString().padStart(2, 0)}
          <span className='punc'>:</span>
          {time.getSeconds().toString().padStart(2, 0)}
          <br />
          Brooklyn<span className='punc'>,</span> New York
        </p>
        <PortableText blocks={about} />
      </S.FlexBox>
    </S.FlexWrapper>
  )
}

export default Header
