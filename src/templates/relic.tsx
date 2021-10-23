import { graphql } from 'gatsby'
import React from 'react'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    return (
        <>
            <Nav />
            <Layout>
                <h1>{relic.name}</h1>
                <ReactMarkdown children={relic.description} />
            </Layout>
        </>

    )
}

export const query = graphql`
query($id: String!) {
    strapiRelics(id: {eq: $id}) {
        name
        description
        images {
            localFile {
                childrenImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
                }
            }
        }
    }
}
`;
export default Relic;