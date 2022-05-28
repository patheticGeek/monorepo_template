import { GraphqlContext } from '@packages/graphql'
import { Resolvers } from '@packages/graphql/generated'

import queryResolvers from './query'

const resolvers: Resolvers<GraphqlContext> = {
  Query: queryResolvers
}

export default resolvers
