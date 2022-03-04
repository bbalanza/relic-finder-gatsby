import React from 'react'
import { parse, ParsedQuery } from "query-string"
import { graphql, navigate } from 'gatsby'
import { Nav } from '../../components/Nav'
import { Content } from '../../components/Content'
import { RelicPreview } from '../../components/RelicPreview'
import { Player } from '../../components/Player'
import { TextDescription } from '../../components/TextDescription'
import { Head } from '../../components/Head'
import { Blocks, findDescription, findSourceUrl } from './helpers'
import { ReturnToButton } from '../ReturnToButton'

const Relic = ({ data, location }: any) => {

  const relic = data.strapiRelic;
  const blocks: Blocks = relic.Blocks
  const title = relic.Title;
  const previewImage = relic.Image.file;
  const description = findDescription(blocks);
  const audio = findSourceUrl(blocks);
  const { Group } = parse(location.search)

  return <>
    <Head />
    <div className='h-screen flex justify-start flex-col'>
      <Nav className='flex-initial' />
      <Content className='max-w-4xl flex-initial items-center'>
        <RelicPreview localFile={previewImage}>
          <h2>{title}</h2>
        </RelicPreview>
        {audio ? (<Player className={``} src={audio} />) : null}
        {description ? (<TextDescription markdown={description} />) : null}
        { Group ?
        <ReturnToButton href={`/${Group}`} text='Return to Relic Group'/> :
        <ReturnToButton href='/' text='Return to QR Scanner' />
        }
      </Content>
    </div>
  </>
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
          gatsbyImageData(
            layout: CONSTRAINED
            formats: WEBP
            quality: 90
            webpOptions: {quality: 90}
          )
        }
      }
    }
  }
}
`;
export default Relic;


