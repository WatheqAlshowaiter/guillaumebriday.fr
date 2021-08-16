import React from 'react'
import Seo from '../components/Seo/Seo'
import { Link } from 'gatsby'

const NotFound = ({ location }) => (
  <>
    <Seo
      title="Oups ! La page est introuvable…"
      description="La page que vous cherchez n'est plus disponible ou a été déplacée."
      path={location.pathname}
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
