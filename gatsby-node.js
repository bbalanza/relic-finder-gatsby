exports.createPages = async ({actions, graphql}) => {
    const { data } = await graphql(`
    query {
        allStrapiRelics {
            edges {
                node {
                    id
                }
            }
        }
    }
`);
    data.allStrapiRelics.edges.forEach(edge => {
        const id = edge.node.id;
        actions.createPage({
            path: id,
            component: require.resolve(`./src/templates/relic.tsx`),
            context: {
                id: id,
            }
        })
    })
}