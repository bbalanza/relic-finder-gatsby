import React from 'react'
import { graphql, navigate } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Nav, Content, RelicPreview, GradientButton, Player } from '../components/'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelic;
    const previewImage = relic.image.localFile;
    const audio = relic.audio_description.localFile.url;
    return <div className='h-screen'>
        <Nav />
        <Content>
            <RelicPreview localFile={previewImage}>
                <h2>{relic.name}</h2>
            </RelicPreview>
            <Player src={audio} />
            <ReactMarkdown className='max-w-4xl' children={relic.description} />
            <GradientButton onClick={() => navigate('/')}>
                <h4>
                    Return to QR Scanner
                </h4>
            </GradientButton>
        </Content>
    </div>
}

export const query = graphql`
query($id: String!) {
    strapiRelic(id: {eq: $id}) {
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


