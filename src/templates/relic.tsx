import React from 'react'
import { graphql, navigate } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Nav, Content, RelicPreview, GradientButton, Player } from '../components/'
import {Blocks, findDescription, findSourceUrl} from './helpers'

const Relic = ({ data }: any) => {

    const relic = data.strapiRelic;
    const blocks: Blocks = relic.Blocks
    const title = relic.Title;
    const previewImage = relic.Image.file;
    const description = findDescription(blocks);
    const audio = findSourceUrl(blocks);

    return <div className='h-screen'>
        <Nav />
        <Content className='max-w-4xl'>
            <RelicPreview localFile={previewImage}>
                <h2>{title}</h2>
            </RelicPreview>
            {audio ? (<Player src={audio} />) : null}
            {description ? (<ReactMarkdown className='' children={description} />) : null}
            <GradientButton onClick={() => navigate('/')}>
                <h4>
                    Return to QR Scanner
                </h4>
            </GradientButton>
        </Content>
    </div>
}

export const query = graphql`
query ($id: Int!) {
  strapiRelic(strapiId: {eq: $id}) {
    Title
    Blocks {
      ... on StrapiComponentBlocksAudioDescription {
        src {
          url
        }
      }
      ... on StrapiComponentBlocksDescription {
        Description
      }
    }
    Image {
      file {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`;
export default Relic;


