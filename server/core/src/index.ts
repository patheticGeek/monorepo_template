import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))

app.get('/', (_, res) => {
  res.status(200).send('🌚')
})

const main = async () => {
  app.listen(PORT, () => {
    console.log(`🚀 Server up on http://localhost:${PORT}`)
  })
}

main()
