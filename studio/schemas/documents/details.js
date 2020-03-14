export default {
  name: 'details',
  type: 'document',
  title: 'Details',
  __experimental_actions: ['update', /* 'create','delete', */ 'publish'],
  fields: [
    {
      name: 'about',
      title: 'About',
      type: 'blinkBlock'
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'blinkBlock'
    },
    {
      name: 'secondary',
      title: 'Secondary',
      type: 'blinkBlock'
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'blinkBlock'
    },
  ]
}
