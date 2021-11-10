getDevelopmentGatsbyOptions = env => {
  return env.CLOUD_DEV
    ? {
      apiURL: env.STRAPI_URL,
      collectionTypes: [`relics`, `categories`],
      loginData: {
        identifier: env.STRAPI_USERNAME,
        password: env.STRAPI_PASSWORD,
      }
    }
    : {
      apiURL: `http://localhost:1337`,
      collectionTypes: [`relics`, `categories`],
    }
}
getProductionGatsbyOptions = env => {
  return {
    apiURL: env.STRAPI_URL,
    collectionTypes: [`relics`, `categories`],
    loginData: {
      identifier: env.STRAPI_USERNAME,
      password: env.STRAPI_PASSWORD,
    },
  }
}

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Relic Finder"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        ...(process.env.NODE_ENV === "development"
          ? getDevelopmentGatsbyOptions(process.env)
          : getProductionGatsbyOptions(process.env)),
        queryLimit: 1000, // Default to 100
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/
        }
      }
    },
  ],
}
