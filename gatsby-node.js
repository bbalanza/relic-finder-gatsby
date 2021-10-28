exports.createPages = async ({actions, graphql}) => {
    const { data } = await graphql(`
    query {
        allStrapiRelics {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
`);
    data.allStrapiRelics.edges.forEach(edge => {
        const id = edge.node.id;
        const slug = edge.node.slug;
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/relic.tsx`),
            context: {
                id: id,
            }
        })
    })
}