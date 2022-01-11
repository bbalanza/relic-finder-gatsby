import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Nav, Content, RelicPreview, Button, Player} from '../components/'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    const previewImage = relic.images.localFile;
    const audio = relic.audio_description.localFile.url;
    return <div className='h-screen'>
        <Nav />
        <Content>
            <RelicPreview localFile={previewImage}>
                <h1>{relic.name}</h1>
            </RelicPreview>
            <ReactMarkdown className='max-w-lg' children={relic.description} />
            <Player audioUrl={audio} />
            <Button className="text-center mt-5 mb-10 " to="/" >Return to QR Scanner</Button>
        </Content>
    </div>
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


