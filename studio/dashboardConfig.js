export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f69812ef210d39535d0c25c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kfxa4ocp',
                  apiId: 'bd1b5999-0c42-43a6-8457-919b83d0d525'
                },
                {
                  buildHookId: '5f69812e06752e7d1d45d975',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7kssxasa',
                  apiId: '1811c9ad-a4d2-4f0a-b669-3c3dcdae06e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sirrine-Jonathan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7kssxasa.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
