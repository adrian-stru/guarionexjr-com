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
      caption
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
  }
  details: sanityDetails(_id: {eq: "details"}) {
    id
    _rawAbout
    _rawContact
    _rawCv
    _rawSecondary
  }
  seo: sanitySeo(_id: {eq: "seo"}) {
    title
    description
    keywords
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
  }, undefined, undefined, true, 125)

  const isSSR = typeof window === 'undefined'

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Context.Provider
            value={context}>
            <Layout
              site={site}
              details={details}
              projects={projects}
              seoTitle={site.title}
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
                description={selectedWorks._rawDescription} />
            </Layout>
          </Context.Provider>
        </React.Suspense>
      )}
    </>
  )
}

export default IndexPage
