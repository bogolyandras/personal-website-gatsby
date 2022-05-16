module.exports = {
  siteMetadata: {
    title: `András Bögöly's Personal homepage`,
    description: `Personal website`,
    author: `@bogolyandras`,
    siteUrl: `https://personalwebsitegatsbymain29263.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `András Bögöly's personal website`,
        short_name: `András Bögöly`,
        start_url: `/`,
        background_color: `#325c80`,
        theme_color: `#325c80`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
