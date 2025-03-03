import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Seo from '../components/Seo/Seo'
import useSiteMetadata from '../hooks/use-site-metadata'

const Home = ({ location, data: { file } }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <Seo description={siteMetadata.description} path={location.pathname} />

      <div className="container py-16 mx-auto max-w-3xl px-3">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <GatsbyImage
              image={file.childImageSharp.gatsbyImageData}
              className="rounded-full w-32 mx-auto"
              alt="Photo de profil"
            />

            <h1 className="mr-4 text-3xl text-gray-700 font-normal mt-4">
              Guillaume{' '}
              <span className="font-extrabold text-black">BRIDAY</span>
            </h1>
          </div>
        </div>

        <div className="post-content text-gray-700">
          <p>
            Je suis développeur Web avec l'envie de partager ce que j'aime sur
            ce blog. Tu y trouveras tous{' '}
            <Link to="/articles">les articles</Link> que j'écris au fil de mes
            recherches. Je fais également <Link to="/talks">des talks</Link> sur
            divers sujets autour du Web.
          </p>

          <p>
            Je travaille sur{' '}
            <a href="https://github.com/guillaumebriday">
              des projets open source
            </a>{' '}
            que tu peux retrouver sur Github.
          </p>

          <p>
            J'ai également créé <a href="https://timecop-app.com/">Timecop</a>{' '}
            pour simplifier la saisie de ses temps et la collaboration en
            équipe.
          </p>

          <p>
            Je suis co-organisateur du{' '}
            <a href="https://www.meetup.com/LyonRB/">Meetup Lyon.rb</a> et je
            fais des{' '}
            <a href="https://www.twitch.tv/guillaumebriday">lives sur Twitch</a>
            .
          </p>

          <p>
            Le reste du temps, je suis passionné de photographie et de voyages
            comme tu peux le voir sur mon{' '}
            <a href="https://instagram.com/guillaumebriday">Instagram</a>.
          </p>

          <p>
            N'hésite pas à venir discuter sur{' '}
            <a href="https://twitter.com/guillaumebriday">Twitter</a> ! 👋
          </p>

          <div className="flex justify-center my-8">
            <div className="w-full md:w-10/12 flex justify-between flex-wrap">
              <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
                <a href="https://github.com/guillaumebriday">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="text-indigo-500 mr-1"
                  />{' '}
                  GitHub
                </a>
              </p>

              <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
                <a href="https://twitter.com/guillaumebriday">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="text-indigo-500 mr-1"
                  />{' '}
                  Twitter
                </a>
              </p>

              <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
                <a href="https://instagram.com/guillaumebriday">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="text-indigo-500 mr-1"
                  />{' '}
                  Instagram
                </a>
              </p>

              <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
                <a href="https://www.twitch.tv/guillaumebriday">
                  <FontAwesomeIcon
                    icon={['fab', 'twitch']}
                    className="text-indigo-500 mr-1"
                  />{' '}
                  Twitch
                </a>
              </p>

              <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
                <a href="https://www.youtube.com/channel/UCRMx07VuenDu9zexw2ojERQ">
                  <FontAwesomeIcon
                    icon={['fab', 'youtube']}
                    className="text-indigo-500 mr-1"
                  />{' '}
                  YouTube
                </a>
              </p>

              <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
                <a href="https://www.linkedin.com/in/guillaumebriday">
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    className="text-indigo-500 mr-1"
                  />{' '}
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
export const query = graphql`
  {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 100)
      }
    }
  }
`
