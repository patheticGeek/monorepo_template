import fetch from 'cross-fetch'
import { useState } from 'react'

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

export * from './generated-client'

/**
 * Creates the link & client.
 *
 * Should be used in ssr to create a new client
 * and then returning the initial state using {@link dehydrateGraphqlClient}
 *
 * When in react, {@link useGraphqlClient} should be used
 */
export const createGraphqlClient = (initialState?: NormalizedCacheObject) => {
  const httpLink = new HttpLink({
    uri: `http://localhost:5000/graphql`,
    fetch
  })

  const client = new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    link: httpLink,
    ssrMode: typeof window === 'undefined'
  })

  return client
}

/**
 * Creates a new graphql client with the given initial state
 *
 * The initial state should come from the page props (`pageProps?.initialGraphqlState`)
 */
export const useGraphqlClient = (initialState?: NormalizedCacheObject) => {
  const [client] = useState(createGraphqlClient(initialState))
  return client
}

/**
 * Dehydrates the client cache and returns `{ initialGraphqlState }`
 *
 * This can be spread in the props in getServerSideProps
 *
 * Example:
 * ```
 * return { props: { ...dehydrateGraphqlClient(client), foo: 'bar' } }
 * ```
 */
export const dehydrateGraphqlClient = (
  client: ApolloClient<NormalizedCacheObject>
) => ({
  initialGraphqlState: client.cache.extract()
})

export { ApolloProvider }
