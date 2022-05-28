import fetch from 'cross-fetch'

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

export * from './generated-client'

const httpLink = new HttpLink({
  uri: `http://localhost:5000/graphql`,
  fetch
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  ssrMode: typeof window === 'undefined'
})

export { ApolloProvider }
