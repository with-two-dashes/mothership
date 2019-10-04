import { StringField } from '../fields/index.js'

const fields = [
  StringField('Site Name', 'siteName')
]

const editor = { preview: false }

export const settingsCollection = {
  label: 'Site Settings',
  file: 'settings/site.json',
  editor,
  fields
}
