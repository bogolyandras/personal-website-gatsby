module.exports = {
  siteMetadata: {
    title: `András Bögöly's Personal homepage`,
    description: `Personal website`,
    author: `@bogolyandras`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        display: `browser`, // https://developers.google.com/web/fundamentals/web-app-manifest/#display
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
