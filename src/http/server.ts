import chalk from 'chalk'
import { Elysia } from 'elysia'

const app = new Elysia().get('/', async () => {
  return 'Hello, World!'
})

app.listen(3333, () => {
  console.log(
    chalk.bgRed.black('🔥 Server is running on http://localhost:3333'),
  )
})
