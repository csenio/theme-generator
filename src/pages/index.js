import React from 'react'
import {Link} from 'gatsby'
import {Button} from '@chakra-ui/core'

import {Layout, Seo} from '@components'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Button variantColor="brand">Check it out</Button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
