/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Path = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const SetupMarkdownCollection = collectionName => perItemInCollection => new Promise((resolve, reject) => {
    graphql(`
    query SetupCollectionQuery($collectionName: String!){
      allFile(filter:{ sourceInstanceName: { eq: $collectionName } }){
        edges {
          node {
            childMarkdownRemark{
              id
              frontmatter{
                slug
              }
            }
          }
        }
      }
    }
    `, { collectionName }).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      } else {
        data.allFile.edges.forEach(({ node: { childMarkdownRemark } }) => {
          perItemInCollection(childMarkdownRemark)
        })
        resolve(data)
      }
    })
  })

  return Promise.all([
    SetupMarkdownCollection('blog-collection')(({ id, frontmatter }) => {
      createPage({
        path: frontmatter.slug,
        component: Path.resolve('src/templates/blogTemplate.js'),
        context: { id }
      })
    })
  ])
}
