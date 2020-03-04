import React from 'react'
import Header from './header'
import SEO from './seo'
import Footer from './footer'
import {BaseStyle} from '../styles'
import * as S from './layout.style'

const Layout = ({site, seoTitle, projects, children, time}) => (
  <S.StyledLayout>
    <BaseStyle time={time} />
    <SEO
      title={seoTitle}
      description={site.description}
      keywords={site.keywords} />
    <Header
      time={time}
      about={site._rawAbout}
      projects={projects} />
    {children}
    <Footer />
  </S.StyledLayout>
)

export default Layout
