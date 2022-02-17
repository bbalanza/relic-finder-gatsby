import React from 'react'
import { graphql, navigate } from 'gatsby'
import { Nav, Content, RelicPreview, GradientButton, Player, TextDescription } from '../components/'
import {Blocks, findDescription, findSourceUrl} from './helpers'

const Relic = ({ data }: any) => {

    const relic = data.strapiRelic;
    const blocks: Blocks = relic.Blocks
    const title = relic.Title;
    const previewImage = relic.Image.file;
    const description = findDescription(blocks);
    const audio = findSourceUrl(blocks);

    return <div className='h-screen flex justify-start flex-col'>
        <Nav className='flex-initial' />
        <Content className='max-w-4xl flex-initial items-center'>
            <RelicPreview localFile={previewImage}>
                <h2>{title}</h2>
            </RelicPreview>
            {audio ? (<Player className={``} src={audio} />) : null}
            {description ? (<TextDescription markdown={description}/>) : null}
            <GradientButton className={`mb-10`}onClick={() => navigate('/')}>
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


