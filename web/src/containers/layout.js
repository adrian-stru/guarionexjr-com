import {graphql, StaticQuery} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteQuery {
    site: sanitySiteSettings {
      _rawAbout
      keywords
      description
      id
      title
    }
  }
`

function LayoutContainer (props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanitySiteSettings) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          )
        }

        const {_rawAbout, keywords, description, id, title} = data.sanitySiteSettings
    
        return (
          <Layout
            {...props}
            siteTitle={title}
            description={description}
            keywords={keywords}
            about={_rawAbout}
            id={id}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
