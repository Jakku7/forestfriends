module.exports = {  
  siteMetadata: {
    title: `Schmiede Smart Assistant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'article', 
          'row',
          'menu',
          'step',
          'user' 
        ]
      },
    },
  ],
}