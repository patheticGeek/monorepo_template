import type { AppProps } from 'next/app'
import React from 'react'

import '@apps/client/assets/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
