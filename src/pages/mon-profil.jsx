import React from 'react'
import Seo from '../components/Seo/Seo'
import { graphql } from 'gatsby'

import About from '../components/Resume/About'
import Skill from '../components/Resume/Skill'
import Experience from '../components/Resume/Experience'
import Education from '../components/Resume/Education'
import Hobbies from '../components/Resume/Hobbies'

const Profile = ({ location, data: { site, file } }) => (
  <>
    <Seo
      title={`Mon profil | ${site.siteMetadata.title}`}
      description="Tu trouvera tout mon parcours."
      location={location}
    />

    <About file={file} />
    <Skill />
    <Experience />
    <Education />
    <Hobbies />
  </>
)

export default Profile
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 100)
      }
    }
  }
`
