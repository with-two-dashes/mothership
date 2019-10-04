import { StringField } from '../fields/index.js'

const fields = [
  StringField('Site Name', 'siteName')
]

const editor = { preview: false }

export const settingsCollection = {
  label: 'Settings',
  folder: 'settings',
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  editor,
  fields
}
