export default {
  name: 'selectedWorks',
  type: 'document',
  title: 'Selected Works',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'blinkBlock'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'selectedWorkImage'
        }
      ]
    }
  ]
}
