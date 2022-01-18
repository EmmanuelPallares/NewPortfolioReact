/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Papri Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@Papri",
    twitterUsername: "@Emmanue00439761",
    image: "https://i.imgur.com/uyq050h.png",
    siteUrl: "https://emmanuelpallares.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //contentTypes : `jobs`, `projects`, `blogs`,
        //singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [{ family: "Open Sans", variants: ["400", "700"] }],
        },
      },
    },
  ],
}
