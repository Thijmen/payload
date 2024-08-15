import type { I18nClient } from '@payloadcms/translations'
import type { ClientCollectionConfig, ClientConfig } from 'payload'

export type Option = {
  label: string
  options?: Option[]
  relationTo?: string
  value: number | string
}

export type OptionGroup = {
  label: string
  options: Option[]
}

export type ValueWithRelation = {
  relationTo: string
  value: number | string
}

export type Value = ValueWithRelation | number | string

type CLEAR = {
  type: 'CLEAR'
}

type UPDATE = {
  collection: ClientCollectionConfig
  config: ClientConfig
  doc: any
  i18n: I18nClient
  type: 'UPDATE'
}

type ADD = {
  collection: ClientCollectionConfig
  config: ClientConfig
  docs: any[]
  i18n: I18nClient
  ids?: (number | string)[]
  sort?: boolean
  type: 'ADD'
}

type REMOVE = {
  collection: ClientCollectionConfig
  config: ClientConfig
  i18n: I18nClient
  id: string
  type: 'REMOVE'
}

export type Action = ADD | CLEAR | REMOVE | UPDATE

export type GetResults = (args: {
  lastFullyLoadedRelation?: number
  lastLoadedPage: Record<string, number>
  onSuccess?: () => void
  search?: string
  sort?: boolean
  value?: Value | Value[]
}) => Promise<void>
