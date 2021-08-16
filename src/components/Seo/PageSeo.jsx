import React from 'react'
import Seo from './Seo'
import SchemaOrg from './SchemaOrg'
import useSiteMetadata from '../../hooks/use-site-metadata'

const PageSeo = ({ path, page }) => {
  const siteMetadata = useSiteMetadata()
  const description = page.frontmatter.description || page.excerpt

  return (
    <>
      <Seo
        title={page.frontmatter.title}
        description={description}
        lang={page.fields.lang}
        author={siteMetadata.author}
        path={path}
      />

      <SchemaOrg
        layout={page.frontmatter.layout}
        title={`${page.frontmatter.title} | ${siteMetadata.title}`}
        description={description}
        articleSection={page.frontmatter.category}
        datePublished={page.fields.datePublished}
        author={siteMetadata.author}
        siteUrl={siteMetadata.siteUrl}
        url={page.fields.slug}
      ></SchemaOrg>
    </>
  )
}

export default PageSeo
