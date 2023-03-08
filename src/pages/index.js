// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        // TODO: if you want a cached version of your photo, keep in imgs dir instead
        // alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpeg"
      />
    </Layout>
  )
}

// updated to use Seo component for browser tab title
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage