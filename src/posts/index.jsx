import React from 'react'
import Seo from '../components/Seo/Seo'
import PostList from '../components/Post/PostList'
import Pagination from '../components/Layout/Pagination'
import { graphql } from 'gatsby'

const Blog = ({
  path,
  data: {
    allMarkdownRemark: { edges: posts },
  },
  pageContext,
}) => (
  <>
    <Seo
      title="Articles"
      description="La liste de tous les articles que j'ai publié."
      path={path}
    />

    <div className="container px-3 py-16 mx-auto max-w-3xl">
      <h1>Articles</h1>

      <p className="font-light text-gray-700 text-sm mb-12">
        Tu trouveras ici tous les articles que j'ai publié, bonne lecture !
      </p>

      <PostList posts={posts} />

      <Pagination pageContext={pageContext} />
    </div>
  </>
)

export default Blog
export const PostIndexQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            lang
            datePublished: date(formatString: "YYYY-MM-DD")
            date: date(formatString: "DD MMMM YYYY", locale: "fr")
          }
          frontmatter {
            layout
            title
            category
          }
        }
      }
    }
  }
`
