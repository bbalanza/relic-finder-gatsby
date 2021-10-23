import { graphql } from 'gatsby'
import React from 'react'
import Nav from '../components/Nav'

const Relic = ({data}: any) => {
    const relic = data.strapiRelics;
    return (
        <>
            <Nav />
            <h1>{relic.name}</h1>
            <p>{relic.description}</p>
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