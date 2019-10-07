import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const BlogPostIdentifier = styled.code`

`

const BlogPostContainer = styled.div`

`

const BlogContent = styled.div`

`

const BlogTitle = styled.div`

`

const BlogDate = styled.div`

`

export default function Template ({ data: { allMarkdownRemark: { edges } } }) {
  const renderableEdges = edges.map(({ node }) => {
    const { id, frontmatter, html: __html } = node
    return (
      <BlogPostContainer className={'blogPost'} key={id}>
        <BlogPostIdentifier>{id}</BlogPostIdentifier>
        <BlogTitle>{frontmatter.title}</BlogTitle>
        <BlogDate>{frontmatter.date}</BlogDate>
        <BlogContent dangerouslySetInnerHTML={{ __html }} />
      </BlogPostContainer>
    )
  })
  return (<>{ renderableEdges }</>)
}

export const pageQuery = graphql`
  query BlogPostTemplateQuery($id: String!){
    allMarkdownRemark(
      filter:{
        id:{
          eq: $id
        }
      }
    ){
      edges{
        node{
          id
          html
          frontmatter{
            title
            date
          }
        }
      }
    }
  }
`
