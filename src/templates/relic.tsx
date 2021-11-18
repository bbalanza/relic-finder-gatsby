import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import { Nav } from '../components/Nav'
import { Layout } from '../components/Layout'
import { RelicPreview } from '../components/RelicPreview'
import { Button } from '../components/Button'
import { Player } from '../components/Player'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    const previewImage = relic.images.localFile;
    const audio = relic.audio_description.localFile.url;
    return (
        <>
            <Nav />
            <Layout>
                <RelicPreview localFile={previewImage} name={relic.name} />
                <ReactMarkdown children={relic.description} />
                <Player audioUrl={audio} />
                <Button className="text-center mt-5 mb-10 " to="/" >Return to Camera</Button>
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


