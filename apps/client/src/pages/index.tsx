import React from 'react'

import { useTestQuery } from '@packages/graphql/generated'

export default function Index() {
  const { data, loading } = useTestQuery({
    variables: { name: 'World' }
  })

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-900">
      {loading ? (
        <div className="w-6 h-6 border-2 border-b-white border-gray-600 rounded-full animate-spin" />
      ) : data ? (
        <h1 className="text-6xl text-gray-300 text-bold">{data.test}</h1>
      ) : null}
    </div>
  )
}
