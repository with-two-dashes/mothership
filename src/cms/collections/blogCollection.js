export const blogCollection = {
  name: 'blog-collection',
  folder: `src/blog`,
  label: 'Blog',
  create: true,
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
