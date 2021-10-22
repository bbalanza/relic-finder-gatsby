import React from 'react'
import Nav from '../components/Nav'
import { graphql } from 'gatsby'
import { parse as parseQuery, ParsedQuery } from 'query-string'
import { Location, RouteComponentProps, Router } from '@reach/router'

const getQueriedRelic = (query: string): string | string[] | null => {
    const queriedRelic = parseQuery(query);
    const {relic} = queriedRelic;
    return relic;
}

const Relic = ({location}: RouteComponentProps) => {
    const searchQuery = location?.search ?? '';
    return (
        <>
            <Nav />
                <h1>Your parsed query is {getQueriedRelic(searchQuery)}</h1>
        </>

    )
}

export default Relic;