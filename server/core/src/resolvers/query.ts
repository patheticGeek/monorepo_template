import { GraphqlContext } from '@packages/graphql'
import { QueryResolvers } from '@packages/graphql/server'

const queryResolvers: QueryResolvers<GraphqlContext> = {
  test: async (_parent, args, _context, _info) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return `Hello ${args.name}!`
  },
  getUser: (_parent, args, { prisma }, _info) => {
    return prisma.user.findUnique({ where: { id: args.id } })
  }
}

export default queryResolvers
