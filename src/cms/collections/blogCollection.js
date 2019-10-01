export const blogCollection = {
  name: 'blog-collection',
  folder: `src/blog`,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  label: 'Blog',
  create: true,
  editor: {
    preview: false
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime'
    },
    {
      label: 'Summary',
      name: 'summary',
      widget: 'string'
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown'
    }
  ]
}
