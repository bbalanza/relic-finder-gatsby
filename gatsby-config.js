/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://strapi-production-5tz4r7de4a-uc.a.run.app`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`article`, `user`],
      singleTypes: [`siteConfig`],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      loginData: {
        identifier: "",
        password: "",
      },
    },
  },
  ],
}
