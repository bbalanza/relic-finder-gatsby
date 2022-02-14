exports.createPages = async ({actions, graphql}) => {
    const { data } = await graphql(`
    query GetRelicMetadata {
        allStrapiRelic {
            edges {
                node {
                    strapiId
                    qr_code {
                        Slug_Name
                    }
                }
            }
        }
    }
`);
    data.allStrapiRelic.edges.forEach(edge => {
        const id = edge.node.strapiId;
        const slug = edge.node.qr_code.Slug_Name;
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/relic.tsx`),
            context: {
                id: id,
            }
        })
    })
}