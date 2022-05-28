import { ContextFunction } from 'apollo-server-core'
import { ExpressContext } from 'apollo-server-express'
import { Request } from 'express'
import Cookies from 'universal-cookie'

import { PrismaClient } from '@prisma/client'

import { GraphqlContext } from '../types'

const extractAuthFromReq = (req: Request) => {
  const cookies = new Cookies(req.headers.cookie)

  const token =
    cookies.get('token') ||
    req.headers.token ||
    cookies.get('Authorization') ||
    req.headers.authorization

  return { token }
}

export const createContext =
  (prisma: PrismaClient): ContextFunction<ExpressContext, GraphqlContext> =>
  ({ req }) => {
    const auth = extractAuthFromReq(req)

    return { prisma, auth }
  }
