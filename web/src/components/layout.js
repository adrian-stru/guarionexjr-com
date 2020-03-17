import React from 'react'
import Header from './header'
import SEO from './seo'
import Footer from './footer'
import {useCurrentNYTime} from '../lib/helpers'
import {BaseStyle} from '../styles'
import * as S from './layout.style'

const Layout = ({site, seoTitle, projects, scrollY, details, children}) => {
  if (typeof window === 'undefined') {
    return (<div />)
  }

  const time = useCurrentNYTime()

  return (
    <S.StyledLayout
      time={time}>
      <BaseStyle />
      <SEO
        title={seoTitle}
        description={site.description}
        keywords={site.keywords} />
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
