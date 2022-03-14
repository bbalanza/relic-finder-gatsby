exports.createPages = async ({ actions, graphql }) => {
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

  const { data: groupData } = await graphql(`
query GroupQuery {
  allStrapiGroup {
    edges {
      node {
        Title
        Description
        Image {
          file {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: WEBP
                quality: 90
                webpOptions: {quality: 90}
              )
            }
          }
        }
        qr_code {
          Slug
        }
        relics {
          Title
          Image {
            file {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: CONSTRAINED
                  quality: 90
                  webpOptions: {quality: 50}
                  width: 400
                )
              }
            }
          }
          qr_code {
            Slug
          }
        }
      }
    }
  }
}
`)
  groupData.allStrapiGroup.edges.forEach(edge => {
    const { qr_code } = edge.node
    actions.createPage({
      path: qr_code.Slug,
      component: require.resolve(`./src/templates/group/group.tsx`),
      context: {
        group: edge.node
      }
    })
  })

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