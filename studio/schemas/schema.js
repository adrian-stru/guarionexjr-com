// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'
import project from './documents/project'
import selectedWorks from './documents/selectedWorks'
import seo from './documents/seo'
import details from './documents/details'

// Object types
import projectImage from './objects/projectImage'
import selectedWorkImage from './objects/selectedWorkImage'
import seoImage from './objects/seoImage'
import blinkBlock from './objects/blinkBlock'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    project,
    selectedWorks,
    seo,
    details,
    seoImage,
    projectImage,
    selectedWorkImage,
    blinkBlock

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
