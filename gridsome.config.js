// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Vught',
  siteUrl: 'https://vught.netlify.com',
  siteDescription: '',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Logo/*.md',
        typeName: 'Logo'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Jumbotron/*.md',
        typeName: 'Jumbotron'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Theme/*.md',
        typeName: 'Theme',
        route: '/theme/:themeName/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Group/*.md',
        typeName: 'Group',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Post/*.md',
        typeName: 'Post',
        route: '/post/:title/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/About/*.md',
        typeName: 'About',
      }
    },
  ]
}
