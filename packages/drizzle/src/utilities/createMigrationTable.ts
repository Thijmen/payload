import type { DrizzleAdapter } from '../types.js'

export const createMigrationTable = async (adapter: DrizzleAdapter): Promise<void> => {
  const prependSchema = adapter.schemaName ? `"${adapter.schemaName}".` : ''

  await adapter.execute({
    drizzle: adapter.drizzle,
    raw: `
      CREATE TABLE IF NOT EXISTS ${prependSchema}"payload_migrations"
      (
        "id"         serial PRIMARY KEY                        NOT NULL,
        "name"       varchar,
        "batch"      numeric,
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
  })
}
