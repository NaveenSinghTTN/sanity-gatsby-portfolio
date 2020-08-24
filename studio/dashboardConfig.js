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
                  buildHookId: '5f43b2f8ac8ae800fde5fa02',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pj1jet3t',
                  apiId: '099ca379-f9c5-431f-b658-6a814784cd72'
                },
                {
                  buildHookId: '5f43b2f87421cf00d8b8faed',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-b3eg5y99',
                  apiId: '9d407894-f785-4985-a773-f696f0d0df72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NaveenSinghTTN/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-b3eg5y99.netlify.app',
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
