import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Preview from '../components/Preview'
import Button from '../components/Button'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    const previewImage = relic.images[0].localFile;

    return (
        <>
            <Nav />
            <Layout>
                <Preview localFile={previewImage} name={relic.name} />
                <ReactMarkdown children={relic.description} />
                <div className="text-center">
                    <Button onClick={history.back}>Return to Camera</Button>
                </div>
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