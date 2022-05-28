import type { AppProps } from 'next/app'
import React from 'react'

import { ApolloProvider, client } from '@packages/graphql/client'

import '@apps/client/assets/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
