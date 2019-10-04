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

const editor = {
  preview: false
}

export const blogCollection = {
  name: 'blog-collection',
  folder: `src/blog`,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  label: 'Blog',
  create: true,
  editor,
  fields
}
