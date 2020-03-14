import React, {useEffect, useState, useRef} from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
  useScroll
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
  projects: allSanityProject {
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
  selectedWorks: sanitySelectedWorks(id: {eq: "be1a2d2c-d4c5-589b-872b-dde247761dbe"}) {
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
  details: sanityDetails(_id: {}, id: {eq: "294ffb7d-4c4b-564e-a212-b9eebee4c919"}) {
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

  const site = (data || {}).site
  const projects = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const selectedWorks = (data || {}).selectedWorks
  const details = (data || {}).details
  const [activeSection, setActiveSection] = useState(null) /* (projects) ? projects[0].slug.current : null */
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

  return (
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
  )
}

export default IndexPage
