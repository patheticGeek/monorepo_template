import { GraphqlContext } from '@packages/graphql'
import { Resolvers } from '@packages/graphql/server'

import queryResolvers from './query'

const resolvers: Resolvers<GraphqlContext> = {
  Query: queryResolvers
}

export default resolvers
