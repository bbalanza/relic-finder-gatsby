exports.createPages = async ({actions, graphql}) => {
    const { data: relicData } = await graphql(`
    query GetRelicMetadata {
        allStrapiRelic {
            edges {
                node {
                    strapiId
                    qr_code {
                        Slug
                    }
                }
            }
        }
    }
`);
    relicData.allStrapiRelic.edges.forEach(edge => {
        const id = edge.node.strapiId;
        const slug = edge.node.qr_code.Slug;
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/relic/relic.tsx`),
            context: {
                id: id,
            }
        })
    })
}