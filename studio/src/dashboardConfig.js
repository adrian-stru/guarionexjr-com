export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e41cf2a50c03a8dcc63f372',
                  title: 'Sanity Studio',
                  name: 'guarionexjr-com-studio',
                  apiId: '4d83459d-e598-43d3-a920-2d80bfe3f1cb'
                },
                {
                  buildHookId: '5e41cf2a1525006b905dc9cd',
                  title: 'Blog Website',
                  name: 'guarionexjr-com',
                  apiId: '3eda82ea-b0b5-4f32-b35e-1b1593a919ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adrian-stru/guarionexjr-com',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://guarionexjr-com.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent Projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
}
