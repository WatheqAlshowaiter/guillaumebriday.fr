import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BigNews from '../BigNews'
import useSiteMetadata from '../../hooks/use-site-metadata'

const Footer = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <footer className="bg-gray-700 text-white px-3 py-6">
        <div className="container max-w-5xl ">
          <p className="m-0 text-2xl font-bold">{siteMetadata.title}</p>

          <div className="flex flex-col md:flex-row justify-between py-4">
            <p className="m-0 mr-4 w-full md:w-1/2">
              {siteMetadata.description}
            </p>

            <div className="flex-shrink-0 flex flex-wrap md:w-1/3 mt-4 md:mt-0">
              <span className="w-1/3 mb-2">
                <Link
                  className="footer-link relative text-gray-300 hover:text-gray-100 hover:no-underline"
                  to="/"
                >
                  Home
                </Link>
              </span>

              <span className="w-1/3 mb-2">
                <Link
                  className="footer-link relative text-gray-300 hover:text-gray-100 hover:no-underline w-1/3"
                  to="/a-propos"
                >
                  À propos
                </Link>
              </span>

              <span className="w-1/3 mb-2">
                <Link
                  className="footer-link relative text-gray-300 hover:text-gray-100 hover:no-underline w-1/3"
                  to="/articles"
                >
                  Articles
                </Link>
              </span>

              <span className="w-1/3 mb-2">
                <Link
                  className="footer-link relative text-gray-300 hover:text-gray-100 hover:no-underline w-1/3"
                  to="/categories"
                >
                  Catégories
                </Link>
              </span>

              <span className="w-1/3 mb-2">
                <Link
                  className="footer-link relative text-gray-300 hover:text-gray-100 hover:no-underline w-1/3"
                  to="/mon-profil"
                >
                  Mon profil
                </Link>
              </span>

              <span className="w-1/3 mb-2">
                <a
                  className="footer-link relative text-gray-300 hover:text-gray-100 hover:no-underline w-1/3"
                  href="https://timecop-app.com"
                >
                  Timecop
                </a>
              </span>
            </div>
          </div>

          <div className="flex justify-end items-baseline border-t pt-4">
            <ul className="flex justify-between w-2/3 sm:w-1/2 md:w-1/3">
              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="/feed.xml"
                  title="RSS"
                >
                  <FontAwesomeIcon icon="rss" />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://github.com/guillaumebriday"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://twitter.com/guillaumebriday"
                  title="Twitter"
                >
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://instagram.com/guillaumebriday"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://www.twitch.tv/guillaumebriday"
                  title="Twitch"
                >
                  <FontAwesomeIcon icon={['fab', 'twitch']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://www.youtube.com/channel/UCRMx07VuenDu9zexw2ojERQ"
                  title="YouTube"
                >
                  <FontAwesomeIcon icon={['fab', 'youtube']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://www.linkedin.com/in/guillaumebriday"
                  title="Linkedin"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://www.amazon.fr/?tag=guillaumebrid-21"
                  title="Lien affilié Amazon"
                >
                  <FontAwesomeIcon icon={['fab', 'amazon']} />
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 hover:text-gray-100"
                  href="https://github.com/sponsors/guillaumebriday"
                  title="M'offrir un café"
                >
                  <FontAwesomeIcon icon="mug-hot" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <BigNews />
    </>
  )
}

export default Footer
