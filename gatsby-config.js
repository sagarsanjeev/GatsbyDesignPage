require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sagar Sanjeev`,
    description: `Full Stack Developer`,
    author: `Sagar Sanjeev`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          'components': './components',
          'containers': './containers',
          'images': './images',
          'state': './state',
          'styles': './styles',
          'utils': './utils',
          static: {
            root: './public',
            alias: './static'
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sagar Sanjeev`,
        short_name: `SS`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
