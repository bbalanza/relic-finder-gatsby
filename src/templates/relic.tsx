import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Nav, Content, RelicPreview, Button, Player, Canvas } from '../components/'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    const previewImage = relic.images.localFile;
    const audio = relic.audio_description.localFile.url;
    return (
        <Canvas>
            <Nav />
            <Content>
                <RelicPreview localFile={previewImage}>
                    <h2>{relic.name}</h2>
                </RelicPreview>
                <ReactMarkdown children={relic.description} />
                <Player audioUrl={audio} />
                <Button className="text-center mt-5 mb-10 " to="/" >Return to QR Scanner</Button>
            </Content>
        </Canvas>
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


