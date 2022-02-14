const setupStrapiTypes = () => ({
  collectionTypes: [`Relic`, `QR Code`],
});

const setupStrapiCredentials = (token) => ({
  token: token
});

const getDevelopmentGatsbyOptions = env => {
  return env.CLOUD_DEV
    ? {
      apiURL: env.STRAPI_URL,
      ...(setupStrapiTypes()),
      ...(setupStrapiCredentials(env.STRAPI_TOKEN)),
    }
    : {
      apiURL: `http://localhost:1337`,
      ...(setupStrapiTypes()),
    }
}
const getProductionGatsbyOptions = env => {
  return {
    apiURL: env.STRAPI_URL,
    ...(setupStrapiTypes()),
    ...(setupStrapiCredentials(env.STRAPI_TOKEN)),
  }
};

const getStrapiSourcePlugin = env => ({
  resolve: 'gatsby-source-strapi',
  options: {
    apiURL: env.STRAPI_URL,
    ...(process.env.NODE_ENV === "development"
      ? getDevelopmentGatsbyOptions(env)
      : getProductionGatsbyOptions(env)),
    queryLimit: 1000, // Default to 100
    locale: 'en', // default to all
  },
})

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
    getStrapiSourcePlugin(process.env),
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
