import { StringField } from '../fields/index.js'

const fields = [
  StringField('Site Name', 'siteName')
]

const editor = { preview: false }

const siteSettingsFile = {
  name: 'siteSettings',
  label: 'Site Settings',
  file: 'settings/site.json',
  delete: false,
  fields
}

const files = [
  siteSettingsFile
]

export const settingsCollection = {
  label: 'Settings',
  files,
  editor,
  delete: false
}
