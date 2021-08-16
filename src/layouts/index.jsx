import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import PageTransition from '../components/Layout/PageTransition'
import ScrollIndicator from '../components/ScrollIndicator'

const Layout = ({ children, location, pageContext }) => (
  <>
    <div className="flex flex-col min-h-screen font-sans leading-normal">
      <ScrollIndicator />

      <Header isBlog={pageContext.isBlog} />

      <PageTransition location={location}>
        <main>{children}</main>
      </PageTransition>

      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
