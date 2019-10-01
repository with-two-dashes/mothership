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
      label: 'Content',
      name: 'content',
      widget: 'markdown'
    }
  ]
}
