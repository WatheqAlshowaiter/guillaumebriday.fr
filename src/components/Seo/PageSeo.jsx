import React from 'react'
import Seo from './Seo'
import SchemaOrg from './SchemaOrg'

const PageSeo = ({
  location,
  page: {
    excerpt,
    fields: { datePublished, lang, slug },
    frontmatter: {
      layout,
      category,
      title: pageTitle,
      description: pageDescription,
    },
  },
  site: {
    siteMetadata: { title: siteTitle, siteUrl, author },
  },
}) => {
  const title = `${pageTitle} | ${siteTitle}`
  const description = pageDescription || excerpt

  console.log(lang)

  return (
    <>
      <Seo
        title={title}
        description={description}
        lang={lang}
        url={location.href}
        author={author}
        location={location}
      />

      <SchemaOrg
        layout={layout}
        title={title}
        description={description}
        articleSection={category}
        datePublished={datePublished}
        author={author}
        siteUrl={siteUrl}
        url={slug}
      ></SchemaOrg>
    </>
  )
}

export default PageSeo
