import S from '@sanity/desk-tool/structure-builder'
import {
  MdMonochromePhotos,
  MdCameraRoll,
  MdSearch,
  MdBrush
} from 'react-icons/lib/md'
import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://guarionexjr-com.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const {schemaType} = props
  if (schemaType === 'project') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({previewURL})
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projects')
        .icon(MdCameraRoll)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Project')),
      S.listItem()
        .title('Selected Works')
        .icon(MdMonochromePhotos)
        .child(
          S.editor()
            .id('selectedWorks')
            .schemaType('selectedWorks')
            .documentId('selectedWorks')
            .title('Selected Works')
        ),
      S.divider(),
      S.listItem()
        .title('Details')
        .icon(MdBrush)
        .schemaType('details')
        .child(
          S.editor()
            .schemaType('details')
            .id('details')
            .title('Details')
            .documentId('details')
        ),
      S.listItem()
        .title('Seo')
        .icon(MdSearch)
        .schemaType('seo')
        .child(
          S.editor()
            .schemaType('seo')
            .id('seo')
            .title('SEO')
            .documentId('seo')
        ),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          !['siteSettings', 'selectedWorks', 'project', 'details', 'seo'].includes(
            listItem.getId()
          )
      )
    ])
