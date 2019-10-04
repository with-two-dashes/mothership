import path from 'path'

import {
  DateTimeField,
  StringField,
  MarkdownField
} from '../fields/index.js'

const fields = [
  StringField('Title', 'title'),
  DateTimeField('Publish Date', 'date'),
  StringField('Summary', 'summary'),
  MarkdownField('Content', 'body')
]

const editor = { preview: false }

export const blogCollection = ({
  name,
  collectionDirectoryRoot
}) => ({
  name,
  label: 'Blog',
  folder: path.normalize(collectionDirectoryRoot, 'blog'),
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  create: true,
  editor,
  fields
})
