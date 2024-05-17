import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `András Bögöly's Personal Homepage`,
    siteUrl: `https://www.bogolyandras.com`,
    image: `/gatsby-icon.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `András Bögöly's personal website`,
          short_name: `András Bögöly`,
          start_url: `/`,
          background_color: `#325c80`,
          theme_color: `#325c80`,
          display: `minimal-ui`,
          icon: `src/images/icon.png`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `./src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `./blog/`
      }
    }
  ]
};

export default config;
