import { graphql } from 'gatsby'
import React from 'react'
import Nav from '../components/Nav'
import Layout from '../components/Layout'

const Relic = ({ data }: any) => {
    const relic = data.strapiRelics;
    return (
        <>
            <Nav />
            <Layout>
                <h1>{relic.name}</h1>
                <p>{relic.description}</p>
            </Layout>
        </>

    )
}

export const query = graphql`
query($id: String!) {
    strapiRelics(id: {eq: $id}) {
        name
        description
    }
}
`;
export default Relic;