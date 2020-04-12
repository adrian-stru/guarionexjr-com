import React, {useState} from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import {useScrollPosition} from '../lib/useScrollPosition'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import SelectedWorks from '../components/selectedWorks'

export const query = graphql`
query IndexPageQuery {
  site: sanitySiteSettings {
    _rawAbout
    keywords
    description
    id
    title
  }
  projects: allSanityProject(sort: {fields: publishedAt, order: DESC}) {
    edges {
      node {
        title
        slug {
          current
        }
        _rawDescription
        id
        images {
          alt
          caption
          highlight
          asset {
            _id
            id
            url
            metadata {
              dimensions {
                height
                width
                aspectRatio
              }
              palette {
                dominant {
                  background
                  title
                }
                darkVibrant {
                  background
                  title
                }
                lightMuted {
                  background
                  title
                }
                lightVibrant {
                  background
                  title
                }
                vibrant {
                  background
                  title
                }
              }
            }
          }
          hotspot {
            x
            y
            width
            height
          }
        }
      }
    }
  }
  selectedWorks: sanitySelectedWorks(_id: {eq: "selectedWorks"}) {
    images {
      asset {
        url
        id
        _id
        metadata {
          dimensions {
            height
            width
            aspectRatio
          }
          palette {
            dominant {
              background
              title
            }
            darkVibrant {
              background
              title
            }
            lightMuted {
              background
              title
            }
            lightVibrant {
              background
              title
            }
            vibrant {
              background
              title
            }
          }
        }
      }
      alt
      hotspot {
        x
        y
      }
    }
    _rawDescription
    _rawImages
  }
  details: sanityDetails(_id: {eq: "details"}) {
    id
    _rawAbout
    _rawContact
    _rawCv
    _rawSecondary
  }
}
`

export const Context = React.createContext()

const IndexPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const [fontsloaded, setFontsLoaded] = useState(false)

  const site = (data || {}).site
  const projects = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const selectedWorks = (data || {}).selectedWorks
  const details = (data || {}).details
  const [activeSection, setActiveSection] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const context = {activeSection, setActiveSection}

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio and add content.'
    )
  }

  useScrollPosition(({prevPos, currPos}) => {
    setScrollY(currPos.y)
  }, undefined, undefined, true, 250)

  const isSSR = typeof window === 'undefined'

  if (!fontsloaded && !isSSR) {
    const WebFont = require('webfontloader')

    WebFont.load({
      custom: {
        families: ['Relative-Faux, Relative-Book-Italic'],
        urls: ['fonts/fonts.css']
      },
      fontactive: (familyName, fvd) => {
        setFontsLoaded(true)
      }
    })
  }

  return (
    <>
      {!isSSR && fontsloaded && (
        <React.Suspense fallback={<div />}>
          <SEO />
          <Context.Provider
            value={context}>
            <Layout
              site={site}
              details={details}
              projects={projects}
              scrollY={scrollY}>
              {projects.map((project) => (
                <Project
                  scrollY={scrollY}
                  key={project.id}
                  title={project.title}
                  slug={project.slug.current}
                  images={project.images}
                  description={project._rawDescription} />
              ))}
              <SelectedWorks
                scrollY={scrollY}
                slug='selectedWorks'
                images={selectedWorks.images}
                rawImages={selectedWorks._rawImages}
                description={selectedWorks._rawDescription} />
            </Layout>
          </Context.Provider>
        </React.Suspense>
      )}
    </>
  )
}

export default IndexPage
