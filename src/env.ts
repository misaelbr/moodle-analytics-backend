import { z } from 'zod'

const envSchema = z.object({
  MOODLE_DB_NAME: z.string().min(1),
  MOODLE_DB_USER: z.string().min(1),
  MOODLE_DB_PASS: z.string().min(1),
  MOODLE_DB_HOST: z.string().min(1),
  MOODLE_DB_PORT: z.string().min(1),
})

export const env = envSchema.parse(process.env)
