/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `András Bögöly - Personal homepage`,
    description: `Personal website base on the Gatsby Framework`,
    author: `@bogolyandras`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "András Bögöly personal website",
        short_name: "András Bögöly",
        start_url: "/",
        background_color: "#325c80",
        theme_color: "#325c80",
        display: "browser", // https://developers.google.com/web/fundamentals/web-app-manifest/#display
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
