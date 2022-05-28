import { readFileSync } from 'fs'
import path from 'path'

import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'

import { PrismaClient } from '@prisma/client'

import { createContext } from './utils/createContext'
import { Resolvers } from './generated-server'
import { GraphqlContext } from './types'

export * from './generated-server'

export const createGraphqlServer = ({
  prisma,
  resolvers
}: {
  prisma: PrismaClient
  resolvers: Resolvers<GraphqlContext>
}) => {
  const typeDefs = readFileSync(
    path.join(__dirname, '../../../schema.graphql')
  ).toString('utf-8')

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext(prisma),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: { 'editor.theme': 'dark', 'editor.cursorShape': 'line' }
      })
    ]
  })

  return graphqlServer
}
