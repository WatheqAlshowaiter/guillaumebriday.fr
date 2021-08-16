import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ title, description, lang, location }) => {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <html lang={lang || 'fr'}></html>

        <meta name="description" content={description} />

        {/* OpenGraph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://mugshotbot.com/m?theme=two_up&mode=light&color=indigo&pattern=lines_in_motion&image=7a772170&hide_watermark=true&url=${location.href}`}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Guillaume Briday" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </>
  )
}

export default Seo
