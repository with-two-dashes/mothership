import {
  DateTimeField,
  StringField,
  MarkdownField,
  BooleanField
} from '../fields/index.js'

const fields = [
  StringField('Title', 'title'),
  DateTimeField('Publish Date', 'date'),
  BooleanField('Is Hidden', 'isHidden', { default: false }),
  StringField('Slug', 'slug'),
  StringField('Summary', 'summary'),
  MarkdownField('Content', 'body')
]

const editor = { preview: false }

export const blogCollection = {
  label: 'Blog',
  folder: 'blog',
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  create: true,
  editor,
  fields
}
