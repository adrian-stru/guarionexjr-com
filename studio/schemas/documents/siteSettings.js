export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'about',
      type: 'blinkBlock'
    },
    {
      name: 'uMargin',
      title: 'Universal Margin',
      type: 'number'
    },
    {
      name: 'fontFiles',
      title: 'Font Files',
      type: 'array',
      of: [{type: 'file'}]
    }
  ]
}
