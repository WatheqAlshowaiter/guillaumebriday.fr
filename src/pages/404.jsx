import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

const NotFound = ({ data: { site } }) => (
  <>
    <Helmet
      title={`Oups ! La page est introuvable… | ${site.siteMetadata.title}`}
    />

    <div className="container px-3 py-16 mx-auto max-w-3xl">
      <h1>Oups ! La page est introuvable…</h1>
      <p>La page que vous cherchez n'est plus disponible ou a été déplacée !</p>

      <p>
        Ce que tu cherches se trouve peut-être dans{' '}
        <Link to="/articles">la liste des articles</Link>. 🤔
      </p>
    </div>
  </>
)

export default NotFound
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
