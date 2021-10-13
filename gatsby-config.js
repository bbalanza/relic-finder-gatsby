getDevelopmentGatsbyOptions = (env) => {
      return {
        apiURL: `http://localhost:1337`,
      }
}
getProductionGatsbyOptions = (env) => {
      return {
        apiURL: env.STRAPI_URL,
      }
}

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
    resolve: `gatsby-source-strapi`,
    options: {
      ...(process.env.NODE_ENV === 'development' 
      ? getDevelopmentGatsbyOptions(process.env) 
      : getProductionGatsbyOptions(process.env) ),
      queryLimit: 1000, // Default to 100
      collectionTypes: [`relics`],
    },
  },
  ],
}
