export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '638d8a8b611d9d3f0911498c',
                  title: 'Sanity Studio',
                  name: 'iwm-sanity-studio',
                  apiId: 'd341490b-676a-43db-bc34-57e6d587b78c'
                },
                {
                  buildHookId: '638d8a8b7df82d3482abfdda',
                  title: 'Blog Website',
                  name: 'iwm-sanity',
                  apiId: '17d3a419-3d14-4e3d-b7a8-351da4121944'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tails1973/IWM-Sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://iwm-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
