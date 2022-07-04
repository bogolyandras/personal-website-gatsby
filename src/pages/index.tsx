import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello there</h1>
    <p>Welcome to my world.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
