import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
  useCurrentNYTime
} from '../lib/helpers'
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
            url
            metadata {
              dimensions {
                height
                width
                aspectRatio
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
        metadata {
          dimensions {
            height
            width
            aspectRatio
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
}
`

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
  const selectedWorks = data.selectedWorks || {}

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio and add content.'
    )
  }

  return (
    <Layout
      time={useCurrentNYTime()}
      site={site}
      projects={projects || []}
      seoTitle={site.title} >
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          slug={project.slug.current}
          images={project.images}
          description={project._rawDescription} />
      ))}
      <SelectedWorks
        images={selectedWorks.images || []}
        description={selectedWorks._rawDescription || []} />
    </Layout>
  )
}

export default IndexPage
