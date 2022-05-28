import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import { createGraphqlServer } from '@packages/graphql/server'
import { PrismaClient } from '@prisma/client'

import resolvers from './resolvers'

const PORT = process.env.PORT || 5000
const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))

app.get('/', (_, res) => {
  res.status(200).send('🌚')
})

const main = async () => {
  const graphqlServer = createGraphqlServer({ prisma, resolvers })

  await graphqlServer.start()
  graphqlServer.applyMiddleware({ app, cors: { origin: '*' } })

  app.listen(PORT, () => {
    console.log(
      `🚀 Server running at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    )
  })
}

main().finally(async () => {
  await prisma.$disconnect()
})
