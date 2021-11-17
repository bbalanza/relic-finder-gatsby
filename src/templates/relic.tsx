import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/Layout'
import Preview from '../components/Preview'
import Button from '../components/Button/Button'
import Player from '../components/Player'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    const previewImage = relic.images.localFile;
    const audio = relic.audio_description.localFile.url;
    return (
        <>
            <Layout>
                <Preview localFile={previewImage} name={relic.name} />
                <ReactMarkdown children={relic.description} />
                <Player audioUrl={audio} />
                <Button className="text-center mt-5" to="/" >Return to Camera</Button>
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
        audio_description {
          localFile {
            url
          }
        }
    }
}
`;
export default Relic;


