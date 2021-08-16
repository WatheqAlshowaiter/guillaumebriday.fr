import React from 'react'
import Seo from '../components/Seo/Seo'
import { graphql } from 'gatsby'

import About from '../components/Resume/About'
import Skill from '../components/Resume/Skill'
import Experience from '../components/Resume/Experience'
import Education from '../components/Resume/Education'
import Hobbies from '../components/Resume/Hobbies'

const Profile = ({ path, data: { file } }) => (
  <>
    <Seo
      title="Mon profil"
      description="Tu trouvera tout mon parcours."
      path={path}
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
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 100)
      }
    }
  }
`
