import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Preview from '../components/Preview'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    const previewImage = relic.images[0].localFile;
    return (
        <>
            <Nav />
            <Layout>
                <h1>{relic.name}</h1>
                <Preview localFile={previewImage}/> 
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
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        } 
    }
}
`;
export default Relic;