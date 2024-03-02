import type { Config } from 'drizzle-kit'

import { env } from './src/env'
export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgres://${env.MOODLE_DB_USER}:${env.MOODLE_DB_PASS}@${env.MOODLE_DB_HOST}:${env.MOODLE_DB_PORT}/${env.MOODLE_DB_NAME}`,
  },
} satisfies Config
