export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'about',
      title: 'About',
      type: 'blinkBlock'
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'blinkBlock'
    }
  ]
}
