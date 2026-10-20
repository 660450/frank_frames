import { enMessages } from './en'
import { nlMessages } from './nl'

export type Locale = 'nl' | 'en'

export const localeMessages = {
  nl: nlMessages,
  en: enMessages,
} as const

export type LocaleMessageMap = typeof localeMessages
