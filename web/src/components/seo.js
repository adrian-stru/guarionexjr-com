import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

function SEO ({meta, lang, description, keywords, title, image}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = (data.seo && data.seo.description) || description || ''
        const siteTitle = (data.seo && data.seo.title) || title || ''
        const metaImage = (data.seo && data.seo.image && data.seo.image.asset) ? imageUrlFor(buildImageObj(data.seo.image)).width(1200).url() : null
        const keywords = data.seo && data.seo.keywords

        return (
          <Helmet
            htmlAttributes={{lang}}
            title={siteTitle}
            titleTemplate={title === siteTitle ? '%s' : `${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: siteTitle
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: metaImage
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: '@Guari1x'
              },
              {
                name: 'twitter:title',
                content: siteTitle
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
      seo: sanitySeo(_id: {eq: "seo"}) {
      id
      description
      keywords
      title
      image {
        asset {
          _id
          id
        }
      }
    }
  }
`
