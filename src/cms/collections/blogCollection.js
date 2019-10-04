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

export const blogCollection = {
  label: 'Blog',
  name: 'blog-collection',
  folder: `${__dirname}/blog`,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  create: true,
  editor,
  fields
}
