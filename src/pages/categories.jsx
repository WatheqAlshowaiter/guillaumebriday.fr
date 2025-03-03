import React from 'react'
import Seo from '../components/Seo/Seo'
import { graphql, Link } from 'gatsby'

const slugify = (string) => {
  return string
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/, '')
    .replace(/\s/g, '-')
}

const Categories = ({
  location,
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <>
    <Seo
      title="Catégories"
      description="La liste de tous les articles triés par catégorie."
      path={location.pathname}
    />

    <div className="container py-16 px-3 mx-auto max-w-3xl">
      <h1>Catégories</h1>

      <ul className="list-reset pt-4 pb-8 border-b overflow-x-scroll whitespace-nowrap shadow-md md:shadow-none px-3 -mx-3">
        {group.map((category) => (
          <li
            key={category.fieldValue}
            className="inline btn btn--lightest btn--sm mr-2"
          >
            <a href={`#${slugify(category.fieldValue)}`}>
              {category.fieldValue}
            </a>
          </li>
        ))}
      </ul>

      <ul className="list-reset mb-8">
        {group.map((category) => (
          <React.Fragment key={category.fieldValue}>
            <div id={slugify(category.fieldValue)} className="mt-12 mb-2">
              <h2 className="inline btn btn--lightest btn--sm">
                {category.fieldValue}
              </h2>
            </div>

            {category.edges.map(({ node: post }) => (
              <li
                className="mb-6"
                key={post.id}
                itemScope=""
                itemType="http://schema.org/BlogPosting"
              >
                <h2 className="font-semibold m-0 leading-tight">
                  <Link
                    to={post.fields.slug}
                    className="text-black"
                    hrefLang={post.fields.lang}
                  >
                    <span itemProp="name">{post.frontmatter.title}</span>
                  </Link>
                </h2>

                <div className="text-gray-700 text-sm">
                  Le{' '}
                  <span
                    itemProp="datePublished"
                    className="font-light"
                    content={post.fields.datePublished}
                  >
                    {post.fields.date}
                  </span>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </>
)

export default Categories
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            id
            fields {
              slug
              lang
              datePublished: date(formatString: "YYYY-MM-DD")
              date: date(formatString: "DD MMM YYYY", locale: "fr")
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`
